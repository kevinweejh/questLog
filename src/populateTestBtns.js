import { createElement, appendMultipleChildren } from './utils.js';
import UpdateView from './updateView.js';
import AddQuest from './addQuest.js';

export default () => {
    const container = document.querySelector('body');
    const updateViewBtn = createElement('btn', ['p-3', 'm-3', 'border', 'hover:bg-purple-600', 'cursor-pointer', 'rounded-lg'], 'Update View');
    const addQuestBtn = createElement('btn', ['p-3', 'm-3', 'border', 'hover:bg-purple-600', 'cursor-pointer', 'rounded-lg'], 'Add Quest');
    
    updateViewBtn.addEventListener('click', () => UpdateView());
    addQuestBtn.addEventListener('click', () => AddQuest())
    
    appendMultipleChildren(container, updateViewBtn, addQuestBtn);    
}
