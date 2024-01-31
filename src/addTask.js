import { v4 as uuidv4 } from "uuid";
import UpdateView from "./updateView";
import FixDate from "./fixDate";

export default (questId) => {
  const initialQuestLog = JSON.parse(localStorage.getItem("questLog"));

  const newTask = {
    id: uuidv4(),
    title: prompt("What is the title of your next task?"),
    description: prompt("What is the description of this task?"),
    difficulty: prompt("What is the difficulty of this task? (Easy / Medium / Hard)"),
    dueDate: prompt("When is this due? Format: yyyymmdd E.g. 20241225"),
    completed: false,
  };

  const newTaskDateFixed = FixDate(newTask);

  const revisedQuestLog = initialQuestLog.slice();
  const affectedQuest = revisedQuestLog.find((quest) => quest.id === questId);
  affectedQuest.tasks.push(newTaskDateFixed);
  localStorage.setItem("questLog", JSON.stringify(revisedQuestLog));
  UpdateView();
};
