import { messageAction, XMessage } from './messages';
import { setElementTheme } from './application/view';
import './frame.css';

interface ExtendedWindow extends Window { 
    renderTemplate: (alias: string, data: Record<string, unknown>) => string 
}

declare var window: ExtendedWindow; // eslint-disable-line no-var

function ready() {
    window.postMessage('load', '*');
}

function sendMessage(msg: XMessage) {
    window.postMessage(msg, '*');
} 

function receiveMessage({ data }: MessageEvent<XMessage>) {
    if (data.type === 'message@UPDATE') {
        document.body.innerHTML = window.renderTemplate(data.alias, data.data);
    } else if (data.type === 'message@SET_THEME') {
        setElementTheme(document.body, data.theme);
    }
}

function onDocumentClick(e: MouseEvent) {
    if (e.target instanceof HTMLElement) {
        let target = e.target;
        while(target && !target.dataset.action) {
            target = target.parentElement!;
        }
        if (target.dataset?.action && target.dataset?.params) {
            const { action, params } = target.dataset;
            sendMessage(messageAction(action, params));
            console.log(action, params)
        }
    }
}

document.addEventListener('DOMContentLoaded', ready);
document.body.addEventListener('click', onDocumentClick);
window.addEventListener('message', receiveMessage);
