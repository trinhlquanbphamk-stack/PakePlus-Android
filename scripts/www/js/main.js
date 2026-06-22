/**
 * 《大学英语IV（写作）》期末智能化刷题系统 - 主控台挂载脚本 (main.js)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. 定义课内各题型的总题量底数
    const TOTAL_COUNTS = {
        mc: 60, // 模块 I 单选题总数
        tf: 45, // 模块 II 判断题总数
        sc: 45  // 模块 III 句子合并题总数
    };

    // 2. 刷新主页 Dashboard 大盘数据
    refreshDashboard(TOTAL_COUNTS);
});

/**
 * 核心大盘刷新引擎
 * @param {Object} totals - 各模块题库总数
 */
function refreshDashboard(totals) {
    if (typeof StorageEngine === 'undefined') {
        console.error('StorageEngine 引擎未加载，请确保 storage.js 在 main.js 之前引入。');
        return;
    }

    // --- 动态驱动进度条与覆盖率文本 ---
    const modules = ['mc', 'tf', 'sc'];
    modules.forEach(mod => {
        const progressData = StorageEngine.getModuleProgress(mod, totals[mod]);

        // 抓取 DOM 节点
        const textNode = document.getElementById(`${mod}-progress-text`);
        const barNode = document.getElementById(`${mod}-progress-bar`);

        if (textNode) {
            textNode.textContent = progressData.ratioText;
        }
        if (barNode) {
            // 利用 CSS Transition 产生平滑走动动画
            barNode.style.width = progressData.ratioText;
        }
    });

    // --- 动态透视并更新错题看板统计 ---
    const stats = StorageEngine.getMistakeStatistics();

    const stubbornNode = document.getElementById('stubborn-count');
    const severeNode = document.getElementById('severe-count');

    if (stubbornNode) {
        stubbornNode.textContent = stats.stubborn;
    }
    if (severeNode) {
        severeNode.textContent = stats.severe;
    }
}