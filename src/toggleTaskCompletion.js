import UpdateView from './updateView.js';

export default (questId, taskId) => {
    const initialQuestLog = JSON.parse(localStorage.getItem('questLog'));
    const revisedQuestLog = initialQuestLog.slice();

    const affectedQuest = revisedQuestLog.find((quest) => quest.id == questId)
    
    const affectedTask = affectedQuest.tasks.find((task) => task.id == taskId);
    console.log('affected quest is ', affectedQuest);
    console.log('affected task is ', affectedTask);

    if (affectedTask) {
        const newTask = {
            ...affectedTask,
            'completed': !affectedTask.completed,
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
}