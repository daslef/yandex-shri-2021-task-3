import { XMessage } from '../messages';
import { SlideTheme } from './types';

export const setScale = (el: HTMLDivElement, value: number): void => {
    el.style.transform = `scaleX(${value.toFixed(5)})`;
}

export const sendMessage = (iframe: HTMLIFrameElement, msg: XMessage): void => {
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(msg, '*');
    }
}

export const initIframe = (parent: HTMLDivElement, onLoad: (iframe: HTMLIFrameElement) => void): HTMLIFrameElement => {
    const iframe = document.createElement('iframe');

    iframe.classList.add('frame');
    iframe.src = 'frame.html';
    iframe.sandbox.add('allow-scripts');
    iframe.sandbox.add('allow-same-origin');

    iframe.addEventListener('load', () => onLoad(iframe));
    parent.appendChild(iframe);

    return iframe;
};

export const initProgress = (parent: HTMLDivElement): HTMLDivElement => {
    const container = document.createElement('div');
    container.classList.add('slide-progress');
    const progress = document.createElement('div');
    progress.classList.add('slide-progress-value');
    container.appendChild(progress);

    parent.appendChild(container);
    
    return progress;
}

export const setElementTheme = (elem: HTMLElement, theme: SlideTheme): void => {
    if (theme == 'dark') {
        elem.classList.add('theme_dark');
        elem.classList.remove('theme_light');
    } else if (theme == 'light') {
        elem.classList.add('theme_light');
        elem.classList.remove('theme_dark');
    }
}