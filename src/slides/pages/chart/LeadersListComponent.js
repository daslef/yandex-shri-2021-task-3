function LeadersItem({ srcSuffix, name, value }) {
    
    return (
        `<div class="chart__person">
            <div class="chart__person__pic">
                <picture>
                    <source srcset="./images/4x/${srcSuffix}" media="(orientation: landscape) and (min-width: 1921px), (orientation: portrait) and (min-width: 1200px)"/>
                    <source srcset="./images/3x/${srcSuffix}" media="(orientation: landscape) and (min-width: 1280px), (orientation: portrait) and (min-width: 880px)"/>
                    <source srcset="./images/2x/${srcSuffix}" media="(orientation: landscape) and (min-width: 880px), (orientation: portrait) and (min-width: 570px)"/>
                    <img class="chart__person__photo" src="./images/1x/${srcSuffix}">
                </picture>
            </div>
            <div class="chart__person__meta">
                <div class="chart__person__name">${name}</div>
                <div class="chart__person__value">${value}</div>
            </div>
        </div>`
    )
}

export default function LeadersList(users) {

    const separator = `<div class="chart__leaders__separator"></div>`

    const leaders = users
        .slice(0,2)
        .map(user => LeadersItem({
            srcSuffix: user.avatar,
            name: user.name,
            value: user.valueText
        }))
        .join(separator)

    return `<div class="chart__leaders">${leaders}</div>`
}