import UpdateView from "./updateView";

export default (questId, taskId) => {
  const initialQuestLog = JSON.parse(localStorage.getItem("questLog"));
  const revisedQuestLog = initialQuestLog.slice();

  const affectedQuest = revisedQuestLog.find((quest) => quest.id === questId);

  const affectedTask = affectedQuest.tasks.find((task) => task.id === taskId);

  if (affectedTask) {
    const newTask = {
      ...affectedTask,
      completed: !affectedTask.completed,
    };
    affectedQuest.tasks = affectedQuest.tasks.filter(
      (task) => task.id !== taskId,
    );
    affectedQuest.tasks.push(newTask);
    localStorage.setItem("questLog", JSON.stringify(revisedQuestLog));
    UpdateView();
  }
};
