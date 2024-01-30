import { v4 as uuidv4 } from "uuid";
import UpdateView from "./updateView";

export default () => {
  const initialQuestLog = JSON.parse(localStorage.getItem("questLog"));
  const newQuest = {
    id: uuidv4(),
    name: prompt("What is the name of your next quest?"),
    default: false,
    tasks: [],
  };
  const revisedQuestLog = [...initialQuestLog, newQuest];

  localStorage.setItem("questLog", JSON.stringify(revisedQuestLog));
  UpdateView();
};
