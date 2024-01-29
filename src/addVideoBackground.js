import { createElement } from './utils.js';
import questLogBackground from '/src/questLogBackground.webm';

export default () => {
    const container = document.querySelector('body');

    const video = createElement('video', ['fixed', 'right-0', 'bottom-0', 'min-w-full', 'max-w-full', 'w-auto', 'h-auto', 'z-0', 'bg-cover', 'overflow-hidden'],'');
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    
    const source = createElement('source', [], '');
    source.src = questLogBackground;
    source.type = 'video/webm';

    video.appendChild(source);

    container.appendChild(video);
}