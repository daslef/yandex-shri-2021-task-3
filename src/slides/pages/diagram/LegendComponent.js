function LegendItem({ title, value, difference }) {
    
    return (
        `<div class="legend__item">
            <div class="legend__item__indicator"></div>
            <div class="legend__item__title">${title}</div>
            <div class="legend__item__values">
                <div class="legend__item__diff">${difference.slice(0, difference.indexOf(' '))}</div>
                <div class="legend__item__total">${value.slice(0, difference.indexOf(' '))}</div>
            </div>
        </div>`
    )
}

export default function LegendComponent(categories) {

    const separator = `<div class="diagram__legend__separator"></div>`

    const output = categories
        .map(category => LegendItem({
            title: category.title,
            value: category.valueText,
            difference: category.differenceText
        }))
        .join(separator)

    return `<div class="diagram__legend">${output}</div>`

}