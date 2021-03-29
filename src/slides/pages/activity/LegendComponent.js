function LegendItem(text, modifier) {
    return (
        `<div class="activity__legend__item">
            <div class="activity__legend__pic activity__legend__pic--${modifier}"></div>
            <div class="activity__legend__text">${text}</div>
        </div>`
    )
}


export default function LegendComponent(orientation) {

    const sliderUnit = theme => {
        return `<img class="activity__legend__img--${theme}" src=./images/slider-unit-${theme}.svg />`
    }

    return (
        `<div class="activity__legend activity__legend--${orientation}">
            <div class="activity__legend__item">
                <div class="activity__legend__pic">
                    ${sliderUnit("light")}
                    ${sliderUnit("dark")}
                </div>
                <div class="activity__legend__text">
                    ${orientation == 'landscape' ? '2 часа' : '1 час'}
                </div>
            </div>
            ${LegendItem('0', 'min')}
            ${LegendItem('1 — 2', 'mid')}
            ${LegendItem('3 — 4', 'max')}
            ${LegendItem('5 — 6', 'extra')}
        </div>`
    )
}