import DonutComponent from './DonutComponent'
import LegendComponent from './LegendComponent'


export default function DiagramSlide(total, diff, categories) {
    return (
        `<div class="slide__content diagram">
            ${DonutComponent(total, diff, categories)}
            ${LegendComponent(categories)}
        </div>`
    )
}
