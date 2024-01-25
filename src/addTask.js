import UpdateView from './updateView.js';
import { v4 as uuidv4 } from 'uuid';

export default () => {
    const questName = prompt('What is the name of the quest you want to add a task to?');
    
    const initialQuestLog = JSON.parse(localStorage.getItem('questLog'));
    const questNames = initialQuestLog.map((quest) => quest['name']);
    if (questNames.includes(questName)) {
        const newTask = {
            'id': uuidv4(),
            'title': prompt('What is the title of your next task?'),
            'description': prompt('What is the description of this task?'),
            'priority': parseInt(prompt('What is the priority of this task?')),
            'dueDate': prompt('When is this due?'),
            'completed': false,
        }

        const revisedQuestLog = initialQuestLog.slice();
        const affectedQuest = revisedQuestLog.find((quest) => quest.name == questName)
        affectedQuest.tasks.push(newTask);
        localStorage.setItem('questLog', JSON.stringify(revisedQuestLog));
        UpdateView();
        return;
    }
    console.error('Invalid quest name');

} 