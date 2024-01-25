import UpdateView from './updateView.js';

export default () => {
    const initialQuestLog = JSON.parse(localStorage.getItem('questLog'));
    const revisedQuestLog = initialQuestLog.slice();
    const questNames = initialQuestLog.map((quest) => quest['name']);
    const questName = prompt('Quest to edit: ')

    if (questNames.includes(questName)) {
        const affectedQuest = revisedQuestLog.find((quest) => quest.name == questName)
        const affectedTaskTitle = prompt('Task to edit:')
        
        const affectedTask = affectedQuest.tasks.find((task) => task.title == affectedTaskTitle);
        console.log('affected quest is ', affectedQuest);
        console.log('affected task is ', affectedTask);

        if (affectedTask) {
            const newTask = {
                ...affectedTask,
                'completed': !affectedTask.completed,
            }
            console.log('time to filter', affectedQuest);
            affectedQuest.tasks = affectedQuest.tasks.filter((task) => task.title !== affectedTaskTitle)
            console.log('after filtering', affectedQuest);
            affectedQuest.tasks.push(newTask);
            console.log('after pushing', affectedQuest);
            localStorage.setItem('questLog', JSON.stringify(revisedQuestLog));
            UpdateView();
            return;
        }
        console.error('Invalid task name');
    }
    console.error('Invalid quest name');
}