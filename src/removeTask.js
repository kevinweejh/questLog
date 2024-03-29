import UpdateView from "./updateView";

export default (questId, taskId) => {
  const questLog = JSON.parse(localStorage.getItem("questLog"));

  const affectedQuest = questLog.find((quest) => quest.id === questId);
  const affectedTask = affectedQuest.tasks.find((task) => task.id === taskId);

  if (affectedTask) {
    affectedQuest.tasks = affectedQuest.tasks.filter(
      (task) => task.id !== taskId,
    );

    localStorage.setItem("questLog", JSON.stringify(questLog));
    UpdateView();
  }
};
