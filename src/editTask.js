import UpdateView from './updateView.js';

export default (questId, taskId) => {
    const initialQuestLog = JSON.parse(localStorage.getItem('questLog'));
    const revisedQuestLog = initialQuestLog.slice();
    
    const affectedQuest = revisedQuestLog.find((quest) => quest.id == questId);
    const affectedTask = affectedQuest.tasks.find((task) => task.id == taskId);
    console.log('affected quest is ', affectedQuest);
    console.log('affected task is ', affectedTask);

    if (affectedTask) {
        const newTask = {
            ...affectedTask,
            'title': prompt('What is the new title of this task?'),
            'description': prompt('What is the new description of this task?'),
            'priority': prompt('What is the new priority of this task?'),
            'dueDate': prompt('When is this due?'),
        }
        console.log('time to filter', affectedQuest);
        affectedQuest.tasks = affectedQuest.tasks.filter((task) => task.id !== taskId)
        console.log('after filtering', affectedQuest);
        affectedQuest.tasks.push(newTask);
        console.log('after pushing', affectedQuest);
        localStorage.setItem('questLog', JSON.stringify(revisedQuestLog));
        UpdateView();
        return;
    }
    console.error('Invalid task name');
} 