import UpdateView from "./updateView";

export default (questId) => {
  const initialQuestLog = JSON.parse(localStorage.getItem("questLog"));
  const revisedQuestLog = initialQuestLog.filter(
    (quest) => quest.id !== questId,
  );

  const isRemoved = initialQuestLog.length !== revisedQuestLog.length;
  if (isRemoved) {
    localStorage.setItem("questLog", JSON.stringify(revisedQuestLog));
    UpdateView();
  }
};
