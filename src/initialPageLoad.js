import { createElement } from './utils.js';

export default () => {
    const container = document.querySelector('body');
    const starter = createElement('h1', ['text-2xl', 'font-semibold', 'text-red-100'], 'hello, world');
    
    container.appendChild(starter);
}