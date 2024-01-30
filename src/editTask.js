import UpdateView from "./updateView";

export default (questId, taskId) => {
  const initialQuestLog = JSON.parse(localStorage.getItem("questLog"));
  const revisedQuestLog = initialQuestLog.slice();

  const affectedQuest = revisedQuestLog.find((quest) => quest.id === questId);
  const affectedTask = affectedQuest.tasks.find((task) => task.id === taskId);

  if (affectedTask) {
    const newTask = {
      ...affectedTask,
      title: prompt("What is the new title of this task?"),
      description: prompt("What is the new description of this task?"),
      priority: prompt("What is the new priority of this task?"),
      dueDate: prompt("When is this due?"),
    };
    affectedQuest.tasks = affectedQuest.tasks.filter(
      (task) => task.id !== taskId,
    );
    affectedQuest.tasks.push(newTask);
    localStorage.setItem("questLog", JSON.stringify(revisedQuestLog));
    UpdateView();
    return;
  }
  console.error("Invalid task name");
};
