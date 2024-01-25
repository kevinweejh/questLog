import { createElement, appendMultipleChildren } from './utils.js';
import UpdateView from './updateView.js';
import RemoveQuest from './removeQuest.js';
import RemoveTask from './removeTask.js';
import AddQuest from './addQuest.js';
import AddTask from './addTask.js';
import EditTask from './editTask.js';
import ToggleTaskCompletion from './toggleTaskCompletion.js';

export default () => {
    const container = document.querySelector('body');
    const updateViewBtn = createElement('btn', ['p-3', 'm-3', 'border', 'hover:bg-purple-600', 'cursor-pointer', 'rounded-lg'], 'Update View');
    const removeQuestBtn = createElement('btn', ['p-3', 'm-3', 'border', 'hover:bg-purple-600', 'cursor-pointer', 'rounded-lg'], 'Remove Quest');
    const removeTaskBtn = createElement('btn', ['p-3', 'm-3', 'border', 'hover:bg-purple-600', 'cursor-pointer', 'rounded-lg'], 'Remove Task');
    const addQuestBtn = createElement('btn', ['p-3', 'm-3', 'border', 'hover:bg-purple-600', 'cursor-pointer', 'rounded-lg'], 'Add Quest');
    const addTaskBtn = createElement('btn', ['p-3', 'm-3', 'border', 'hover:bg-purple-600', 'cursor-pointer', 'rounded-lg'], 'Add Task');
    const editTaskBtn = createElement('btn', ['p-3', 'm-3', 'border', 'hover:bg-purple-600', 'cursor-pointer', 'rounded-lg'], 'Edit Task');
    const toggleTaskCompletionBtn = createElement('btn', ['p-3', 'm-3', 'border', 'hover:bg-purple-600', 'cursor-pointer', 'rounded-lg'], 'Toggle Task Completion');
    
    updateViewBtn.addEventListener('click', () => UpdateView());
    removeQuestBtn.addEventListener('click', () => RemoveQuest())
    removeTaskBtn.addEventListener('click', () => RemoveTask());
    addQuestBtn.addEventListener('click', () => AddQuest())
    addTaskBtn.addEventListener('click', () => AddTask());
    editTaskBtn.addEventListener('click', () => EditTask());
    toggleTaskCompletionBtn.addEventListener('click', () => ToggleTaskCompletion());
    
    appendMultipleChildren(container, updateViewBtn, removeQuestBtn, removeTaskBtn, addQuestBtn, addTaskBtn, editTaskBtn, toggleTaskCompletionBtn);    
}
