function ChartItem({value, title, isCurrent, maxValue}) {

    let minHeight = value / maxValue * (70 - 3.3)
    minHeight = (minHeight < 1) ? '8px' : `${minHeight}%`

    return (
        `<div class="chart__item ${isCurrent ? 'chart__item--active' : ''}">
            <div class="chart__item__value">${value > 0 ? value : ''}</div>
            <div class="chart__item__bar" style="min-height:${minHeight}"></div>
            <div class="chart__item__title">${title}</div>
        </div>`
    )
}

export default function ChartList(values) {

    let activeIndex;
    
    for (const [ix, el] of values.entries()) {
        if (el.hasOwnProperty('active') && el.active === true) {
            activeIndex = ix
            break
        }
    }
    
    const leftLimit = Math.max(activeIndex - 6, 0)
    const rightLimit = Math.min(activeIndex + 2, values.length)

    const relevantValues = values.slice(leftLimit, rightLimit + 1)
    const maxValue = Math.max(...relevantValues.map(el => el.value))

    const output = relevantValues
        .map((el, ix) => ChartItem({
            value: el.value,
            title: el.title,
            isCurrent: el.hasOwnProperty('active'),
            maxValue: maxValue
        }))
        .join('')
    
    return `<div class="chart__list">${output}</div>`
    
}