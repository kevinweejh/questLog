import UpdateView from './updateView.js';

export default () => {
    const questName = prompt('Name of quest to remove');
    const initialQuestLog = JSON.parse(localStorage.getItem('questLog'));
    const revisedQuestLog = initialQuestLog.filter((quest) => quest.name != questName);
    
    const isRemoved = initialQuestLog.length !== revisedQuestLog.length;
    if (isRemoved) {
        localStorage.setItem('questLog', JSON.stringify(revisedQuestLog));
        UpdateView();
        return
    }
    
    console.error(`Quest of name '${questName}' not found`);  
} 