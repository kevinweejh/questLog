import UpdateView from './updateView.js';

export default () => {
    const initialQuestLog = JSON.parse(localStorage.getItem('questLog'));
    const newQuest = {
        'name': prompt('What is the name of your next quest?'),
        'priority': parseInt(prompt('What is the priority of this quest?')),
        'default': false,
        'tasks': [],
    }
    const revisedQuestLog = [...initialQuestLog, newQuest];
    
    localStorage.setItem('questLog', JSON.stringify(revisedQuestLog));
    UpdateView();
} 