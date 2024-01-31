import UpdateView from "./updateView";
import SortQuestOrder from "./sortQuestOrder";

export default (questId) => {
  const initialQuestLog = JSON.parse(localStorage.getItem("questLog"));
  const revisedQuestLog = initialQuestLog.slice();

  revisedQuestLog.forEach((quest) => {
    if (quest.id === questId) {
      quest.default = !quest.default;
    } else {
      quest.default = false;
    }
  });

  SortQuestOrder(revisedQuestLog);
  UpdateView();
};
