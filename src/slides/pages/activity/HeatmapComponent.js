function HeatmapRowComponent(rowData, index) {

    const magicNumber = 16.7;

    return (
        `<div class="heatmap__row" style="bottom: ${magicNumber * (23 - index)}px;">
            ${rowData.join('')}
        </div>`
    )
}


function HeatmapImageComponent(activity) {
    const size = (activity == 0) ? 'min' : (activity <= 2) ? 'mid' : (activity <= 4) ? 'max' : 'extra';
    
    const template = theme => {
        return `<div class="heatmap__element heatmap__element--${theme}">
            <img class="heatmap__image" src="./images/${size}-${theme}.svg" />
        </div>`
    }
    
    return template('light').concat(template('dark'))
}

function generateHourData(data) {

    const hourData = []
    const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

    for (const day of days) {

        const dayData = []
        
        data[day].map((activity, index) => {
            if (index % 2 == 1) {
                dayData[dayData.length-1] += activity
            } else {
                dayData.push(activity)
            }
        })

        const dayImages = dayData.map(value => HeatmapImageComponent(value))

        const heatmapGap = '<div class="heatmap__gap"></div>'
        
        if (days.indexOf(day) % 2 == 0) {
            dayImages.push(heatmapGap)
        } else {
            dayImages.unshift(heatmapGap)
        }
        
        hourData.push(dayImages)
    }

    return hourData
}


function generateDayData(data) {
    
    const dayData = []

    for (let i=0; i < 24; i++) {
        
        const hourData = [data.mon[i], data.tue[i], data.wed[i], data.thu[i], data.fri[i], data.sat[i], data.sun[i]]
        
        const hourImages = hourData.map(value => HeatmapImageComponent(value))

        const heatmapGap = '<div class="heatmap__gap"></div>'
        
        if (i % 2 == 0) {
            hourImages.push(heatmapGap)
        } else {
            hourImages.unshift(heatmapGap)
        }
        
        dayData.push(hourImages)
    }

    return dayData

}


export default function HeatmapComponent(data, orientation) {

    const heatMapData = (orientation == 'landscape') 
        ? generateHourData(data)
        : generateDayData(data);
        
    return (
        `<div class="activity__heatmap activity__heatmap--${orientation}">
            ${heatMapData.map((el, ix) => HeatmapRowComponent(el, ix)).join('')}
        </div>`
    )
}