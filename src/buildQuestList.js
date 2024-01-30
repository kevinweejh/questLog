import { createElement, appendMultipleChildren } from './utils.js';
import AddTask from './addTask.js';
import EditTask from './editTask.js';
import RemoveTask from './removeTask.js';
import RemoveQuest from './removeQuest.js';
import ToggleTaskCompletion from './toggleTaskCompletion.js';

export default () => {
    const container = document.querySelector('body');
    const questLog = JSON.parse(localStorage.getItem('questLog'));
    const questAddBtn = createElement('btn', ['p-3', 'm-3', 'border', 'hover:bg-purple-600', 'cursor-pointer', 'rounded-lg', 'w-fit', 'z-10', 'absolute', 'top-[5%]'], 'Add Quest');
    const questList = createElement('div', ['flex', 'flex-col', 'border-green-300', 'border-4', 'z-10', 'absolute', 'max-h-[75%]', 'overflow-y-auto', 'top-1/2', 'left-1/2', 'transform', '-translate-x-1/2', '-translate-y-1/2'], '', 'fullQuestLog');
    questLog.forEach((quest) => {
        const questContainer = createElement('div', ['flex', 'flex-col', 'border', 'border-blue-300', 'border-4'], '');
        const questName = createElement('h1', ['text-2xl', 'font-semibold', 'border'], `Quest: ${quest.name}`);
        const questAddTaskBtn = createElement('btn', ['p-3', 'm-3', 'border', 'hover:bg-purple-600', 'cursor-pointer', 'rounded-lg', 'w-fit'], '+ Task');
        questAddTaskBtn.addEventListener('click', () => AddTask(quest.id));
        const questRemoveBtn = createElement('btn', ['p-3', 'm-3', 'border', 'hover:bg-purple-600', 'cursor-pointer', 'rounded-lg', 'w-fit'], 'x');
        questRemoveBtn.addEventListener('click', () => RemoveQuest(quest.id));
        const questDefaultStatus = createElement('p', ['border'], `Default: ${quest.default}`);
        
        appendMultipleChildren(questContainer, questName, questAddTaskBtn, questRemoveBtn, questDefaultStatus);

        quest.tasks.forEach((task) => {
            const taskContainer = createElement('div', ['flex', 'flex-col', 'border', 'border-red-300', 'border-4'], '');
            const taskTitle = createElement('h1', ['text-2xl', 'font-semibold', 'border', 'border-red-300', 'border-4'], `Title: ${task.title}`);
            const taskEditBtn = createElement('btn', ['p-3', 'm-3', 'border', 'hover:bg-purple-600', 'cursor-pointer', 'rounded-lg', 'w-fit'], '...');
            taskEditBtn.addEventListener('click', () => EditTask(quest.id, task.id));
            const taskRemoveBtn = createElement('btn', ['p-3', 'm-3', 'border', 'hover:bg-purple-600', 'cursor-pointer', 'rounded-lg', 'w-fit'], 'x');
            taskRemoveBtn.addEventListener('click', () => RemoveTask(quest.id, task.id));
            const taskToggleCompletionBtn = createElement('btn', ['p-3', 'm-3', 'border', 'hover:bg-purple-600', 'cursor-pointer', 'rounded-lg', 'w-fit'], '✓');
            taskToggleCompletionBtn.addEventListener('click', () => ToggleTaskCompletion(quest.id, task.id));
            const taskDescription = createElement('p', ['border', 'border-red-300', 'border-4'], `Description: ${task.description}`);
            const taskPriority = createElement('p', ['border', 'border-red-300', 'border-4'], `Priority: ${task.priority}`);
            const taskDueDate = createElement('p', ['border', 'border-red-300', 'border-4'], `Due date: ${task.dueDate}`);
            
            appendMultipleChildren(taskContainer, taskTitle, taskEditBtn, taskRemoveBtn, taskToggleCompletionBtn, taskDescription, taskPriority, taskDueDate)

            questContainer.appendChild(taskContainer);
        })
        questList.appendChild(questContainer);
    })
    appendMultipleChildren(container, questAddBtn, questList);
}