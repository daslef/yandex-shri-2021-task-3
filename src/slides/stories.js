import './scss/app.scss';

import './scss/_media.scss';
import './scss/_variables.scss';
import './scss/_fonts.scss';

import './scss/leaders/leaders.scss';
import './scss/leaders/__item.scss';

import './scss/diagram/diagram.scss';
import './scss/diagram/__legend.scss';
import './scss/diagram/__donut.scss';

import './scss/vote/vote.scss';

import './scss/activity/activity.scss';
import './scss/activity/__heatmap.scss';
import './scss/activity/__legend.scss';

import './scss/chart/chart.scss';
import './scss/chart/__item.scss';
import './scss/chart/__person.scss';

import LeadersSlide from './pages/leaders';
import VoteSlide from './pages/vote';
import ChartSlide from './pages/chart';
import DiagramSlide from './pages/diagram';
import ActivitySlide from './pages/activity';


window.renderTemplate = function(alias, data) {
    
    let content;
    
    if (alias == 'leaders') {
        content = LeadersSlide(data.emoji, data.users, data.selectedUserId);
    } else if (alias == 'vote') {
        content = VoteSlide(data.emoji, data.selectedUserId, data.users);
    } else if (alias == 'chart') {
        content = ChartSlide(data.values, data.users);
    } else if (alias == 'diagram') {
        content = DiagramSlide(data.totalText, data.differenceText, data.categories);
    } else if (alias == 'activity') {
        content = ActivitySlide(data);
    }

    return (
        `<div class="slide">
            <div class="slide__heading">${data.title}</div>
            <div class="slide__subhead">${data.subtitle}</div>
            ${content}
        </div>`
    )
}