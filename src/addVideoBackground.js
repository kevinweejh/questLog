import { createElement, appendMultipleChildren } from './utils.js';
import questLogBackground from '/src/questLogBackground.webm';

export default () => {
    const container = document.querySelector('body');

    const bgLayer = createElement('div', ['absolute', 'w-screen', 'h-screen', 'overflow-hidden'], '');

    const video = createElement('video', ['absolute', 'right-0', 'bottom-0', 'min-w-full', 'min-h-full', 'w-auto', 'h-auto', '-z-10', 'object-cover'],'');
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    
    const source = createElement('source', [], '');
    source.src = questLogBackground;
    source.type = 'video/webm';

    video.appendChild(source);

    const overlay = createElement('div', ['absolute', 'top-0', 'left-0', 'w-full', 'h-full', 'object-cover', 'z-0', 'bg-black/50'], '');

    appendMultipleChildren(bgLayer, video, overlay);

    container.appendChild(bgLayer);
}