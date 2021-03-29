import HeatmapComponent from './HeatmapComponent'
import LegendComponent from './LegendComponent'

export default function ActivitySlide({ data }) {

    return (
        `<div class="slide__content activity">
            ${HeatmapComponent(data, 'portrait')}
            ${HeatmapComponent(data, 'landscape')}
            ${LegendComponent('portrait')}
            ${LegendComponent('landscape')}
        </div>`
    )
}
