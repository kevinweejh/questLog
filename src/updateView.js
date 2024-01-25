import ClearView from './clearView.js';
import BuildQuestList from './buildQuestList.js';

export default () => {
    ClearView();
    BuildQuestList();
    console.log(JSON.parse(localStorage.getItem('questLog')))
}