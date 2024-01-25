import { createElement, appendMultipleChildren } from './utils.js';
import EditTask from './editTask.js';

export default () => {
    const container = document.querySelector('body');
    const questLog = JSON.parse(localStorage.getItem('questLog'));
    const questList = createElement('div', ['flex', 'flex-col', 'border-green-300', 'border-4'], '', 'fullQuestLog');
    questLog.forEach((quest) => {
        const questContainer = createElement('div', ['flex', 'flex-col', 'border', 'border-blue-300', 'border-4'], '');
        const questName = createElement('h1', ['text-2xl', 'font-semibold', 'border'], `Quest: ${quest.name}`);
        const questDefaultStatus = createElement('p', ['border'], `Default: ${quest.default}`);
        appendMultipleChildren(questContainer, questName, questDefaultStatus);

        quest.tasks.forEach((task) => {
            const taskContainer = createElement('div', ['flex', 'flex-col', 'border', 'border-red-300', 'border-4'], '');
            const taskTitle = createElement('h1', ['text-2xl', 'font-semibold', 'border', 'border-red-300', 'border-4'], `Title: ${task.title}`);
            const taskEditBtn = createElement('btn', ['p-3', 'm-3', 'border', 'hover:bg-purple-600', 'cursor-pointer', 'rounded-lg', 'w-fit'], '...');
            taskEditBtn.addEventListener('click', () => EditTask(quest.id, task.id));
            const taskDescription = createElement('p', ['border', 'border-red-300', 'border-4'], `Description: ${task.description}`);
            const taskPriority = createElement('p', ['border', 'border-red-300', 'border-4'], `Priority: ${task.priority}`);
            const taskDueDate = createElement('p', ['border', 'border-red-300', 'border-4'], `Due date: ${task.dueDate}`);
            const taskCompletionStatus = createElement('p', ['border', 'border-red-300', 'border-4'], `Completed: ${task.completed}`);
            appendMultipleChildren(taskContainer, taskTitle, taskEditBtn, taskDescription, taskPriority, taskDueDate, taskCompletionStatus)

            questContainer.appendChild(taskContainer);
        })
        questList.appendChild(questContainer);
        
    })
    container.appendChild(questList);
}