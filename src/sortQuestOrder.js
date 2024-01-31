export default (revisedQuestLog) => {
    revisedQuestLog.sort((a,b) => b.default - a.default);
    localStorage.setItem("questLog", JSON.stringify(revisedQuestLog));
}