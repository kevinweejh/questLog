import ClearView from "./clearView";
import BuildQuestList from "./buildQuestList";

export default () => {
  ClearView();
  BuildQuestList();
  console.log(JSON.parse(localStorage.getItem("questLog")));
};
