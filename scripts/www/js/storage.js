/**
 * 《大学英语IV（写作）》期末智能化刷题系统 - 核心数据管理与本地缓存持久化引擎 (storage.js)
 */

const STORAGE_KEYS = {
    MISTAKES: 'ENG4_MISTAKE_COLLECTION',   // 错题本数据键
    MC_PROGRESS: 'ENG4_MC_PROGRESS',       // 单选题已刷题库
    TF_PROGRESS: 'ENG4_TF_PROGRESS',       // 判断题已刷题库
    SC_PROGRESS: 'ENG4_SC_PROGRESS'        // 句子合并已刷题库
};

const StorageEngine = {
    // ==========================================
    // 1. 错题本核心管理核心引擎
    // ==========================================

    /**
     * 获取本地存储的所有错题
     * @returns {Array} 错题对象数组
     */
    getMistakes() {
        const data = localStorage.getItem(STORAGE_KEYS.MISTAKES);
        return data ? JSON.parse(data) : [];
    },

    /**
     * 录入或更新一道错题 (触发错误频次累加)
     * @param {string} moduleType - 模块类型: 'mc' (单选), 'tf' (判断), 'sc' (句子合并)
     * @param {Object} questionObj - 原始题目数据对象
     */
    addMistake(moduleType, questionObj) {
        let mistakes = this.getMistakes();
        // 检查错题本中是否已存在该模块下的该题
        let target = mistakes.find(m => m.module === moduleType && m.id === questionObj.id);

        if (target) {
            // 如果存在，错题频次累加，并重置其“连续答对消灭计数”
            target.wrongCount += 1;
            target.streak = 0;
            target.updatedAt = Date.now();
        } else {
            // 如果是新错题，初始化结构
            mistakes.push({
                id: questionObj.id,
                module: moduleType,
                questionData: questionObj, // 完整深度备份题目元数据
                wrongCount: 1,              // 初始错误次数为 1
                streak: 0,                  // 初始连续答对次数为 0
                updatedAt: Date.now()
            });
        }
        localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(mistakes));
    },

    /**
     * 在错题册中作答时的智能斩杀判定逻辑
     * @param {string} moduleType - 模块类型
     * @param {number} id - 题目ID
     * @param {boolean} isCorrectThisTime - 本次作答是否正确
     * @returns {Object} { status: 'updated'|'killed', streak: number, wrongCount: number }
     */
    handleMistakeExercise(moduleType, id, isCorrectThisTime) {
        let mistakes = this.getMistakes();
        let index = mistakes.findIndex(m => m.module === moduleType && m.id === id);

        if (index === -1) return { status: 'not_found' };

        let target = mistakes[index];

        if (isCorrectThisTime) {
            target.streak += 1;
            // 智能化斩杀算法：一旦连续答对 2 次，强制消灭此错题
            if (target.streak >= 2) {
                mistakes.splice(index, 1);
                localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(mistakes));
                return { status: 'killed', streak: target.streak, wrongCount: target.wrongCount };
            }
        } else {
            // 如果在错题本里又做错了，惩罚机制：连对计数归零，错题顽固频次继续加 1
            target.streak = 0;
            target.wrongCount += 1;
        }

        target.updatedAt = Date.now();
        localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(mistakes));
        return { status: 'updated', streak: target.streak, wrongCount: target.wrongCount };
    },

    /**
     * 手动一键斩杀/移除某道错题
     */
    removeMistake(moduleType, id) {
        let mistakes = this.getMistakes();
        mistakes = mistakes.filter(m => !(m.module === moduleType && m.id === id));
        localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(mistakes));
    },

    /**
     * 获取错题严重程度分类统计（用于主页 Dashboard 渲染）
     * @returns {Object} 各级别错题数量
     */
    getMistakeStatistics() {
        const mistakes = this.getMistakes();
        return {
            total: mistakes.length,
            stubborn: mistakes.filter(m => m.wrongCount >= 3).length, // 🔴 顽固错题 (错3次及以上)
            severe: mistakes.filter(m => m.wrongCount === 2).length,   // 🟠 重度错题 (错2次)
            light: mistakes.filter(m => m.wrongCount === 1).length     // 🟡 轻度错题 (错1次)
        };
    },


    // ==========================================
    // 2. 刷题进度与覆盖率持久化控制
    // ==========================================

    /**
     * 标记一道题已被刷过 (记录到已掌握/已接触集合)
     * @param {string} moduleType - 'mc' | 'tf' | 'sc'
     * @param {number} id - 题目ID
     */
    saveProgress(moduleType, id) {
        let key = this._getProgressBarKey(moduleType);
        if (!key) return;

        let progress = this._getProgressList(key);
        if (!progress.includes(id)) {
            progress.push(id);
            localStorage.setItem(key, JSON.stringify(progress));
        }
    },

    /**
     * 获取某个模块的当前复习进度及百分比
     * @param {string} moduleType - 'mc' | 'tf' | 'sc'
     * @param {number} totalQuestions - 对应模块的课内题库总量
     * @returns {Object} { doneCount: 已刷数, ratioText: 百分比字符串, ratioNum: 数字 }
     */
    getModuleProgress(moduleType, totalQuestions) {
        let key = this._getProgressBarKey(moduleType);
        if (!key) return { doneCount: 0, ratioText: '0%', ratioNum: 0 };

        let progress = this._getProgressList(key);
        let doneCount = progress.length;

        // 边界防御：已完成数不允许超过总题数
        if (doneCount > totalQuestions) doneCount = totalQuestions;

        let percentage = totalQuestions > 0 ? Math.round((doneCount / totalQuestions) * 100) : 0;

        return {
            doneCount: doneCount,
            ratioText: `${percentage}%`,
            ratioNum: percentage
        };
    },

    /**
     * 重置清除某个模块的本地作答记录与进度
     */
    clearModuleProgress(moduleType) {
        let key = this._getProgressBarKey(moduleType);
        if (key) localStorage.removeItem(key);
    },


    // ==========================================
    // 3. 内部私有辅助方法 (Private Helpers)
    // ==========================================
    _getProgressBarKey(moduleType) {
        switch (moduleType) {
            case 'mc': return STORAGE_KEYS.MC_PROGRESS;
            case 'tf': return STORAGE_KEYS.TF_PROGRESS;
            case 'sc': return STORAGE_KEYS.SC_PROGRESS;
            default: return null;
        }
    },

    _getProgressList(storageKey) {
        const data = localStorage.getItem(storageKey);
        return data ? JSON.parse(data) : [];
    }
};