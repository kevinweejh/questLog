import UpdateView from "./updateView";
import FixDate from "./fixDate";

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
      difficulty: prompt("What is the new difficulty of this task? (Easy / Medium / Hard)"),
      dueDate: prompt("When is this due? Format: yyyymmdd E.g. 20241225"),
    };
    const newTaskDateFixed = FixDate(newTask);
    
    affectedQuest.tasks = affectedQuest.tasks.filter(
      (task) => task.id !== taskId,
    );
    affectedQuest.tasks.push(newTaskDateFixed);
    localStorage.setItem("questLog", JSON.stringify(revisedQuestLog));
    UpdateView();
    return;
  }
  console.error("Invalid task name");
};
