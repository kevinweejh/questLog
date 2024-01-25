import UpdateView from './updateView.js';

export default () => {
    const taskName = prompt('Name of task to remove:');
    const initialQuestLog = JSON.parse(localStorage.getItem('questLog'));
    const revisedQuestLog = initialQuestLog.map((quest) => {
        const revisedTaskList = quest.tasks.filter((task) => task.title !== taskName)
        return {
            ...quest, 
            tasks: revisedTaskList
        }
    });
    
    const initialTaskCount = initialQuestLog.reduce((count, quest) => count + quest.tasks.length, 0)
    const revisedTaskCount = revisedQuestLog.reduce((count, quest) => count + quest.tasks.length, 0)
    const isRemoved = initialTaskCount !== revisedTaskCount;

    if (isRemoved) {
        localStorage.setItem('questLog', JSON.stringify(revisedQuestLog));
        UpdateView();
        return
    }

    console.error(`Task of name '${taskName}' not found`);  
};