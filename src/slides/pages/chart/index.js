import ChartList from './ChartListComponent'
import LeadersList from './LeadersListComponent'

export default function ChartSlide(values, users) {

    return (
        `<div class="slide__content chart">
            ${ChartList(values)}
            ${LeadersList(users)}
        </div>`
    )
}
