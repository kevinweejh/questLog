import UpdateView from './updateView.js';

export default () => {
    const initialQuestLog = JSON.parse(localStorage.getItem('questLog'));
    const revisedQuestLog = initialQuestLog.slice();
    const questNames = initialQuestLog.map((quest) => quest['name']);
    const questName = prompt('Quest to edit: ')


    if (questNames.includes(questName)) {
        const affectedQuest = revisedQuestLog.find((quest) => quest.name == questName)
        const oldTaskTitle = prompt('Task to edit:')
        
        const affectedTask = affectedQuest.tasks.find((task) => task.title == oldTaskTitle);
        console.log('affected quest is ', affectedQuest);
        console.log('affected task is ', affectedTask);
        
        const newTask = {
            'title': prompt('What is the title of your next task?'),
            'description': prompt('What is the description of this task?'),
            'dueDate': prompt('When is this due?'),
            'completed': false,
        }
        console.log('time to filter', affectedQuest);
        affectedQuest.tasks = affectedQuest.tasks.filter((task) => task.title !== oldTaskTitle)
        console.log('after filtering', affectedQuest);
        affectedQuest.tasks.push(newTask);
        console.log('after pushing', affectedQuest);
        localStorage.setItem('questLog', JSON.stringify(revisedQuestLog));
        UpdateView();
        return;

    }
    console.error('Invalid quest name');
} 