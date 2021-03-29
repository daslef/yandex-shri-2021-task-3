function PersonCardComponent(srcSuffix, name, score, selected = false) {
    return (
        `<div class="podium__item__pic ${selected && 'podium__item__pic--selected'}">
            <picture>
                <source srcset="./images/4x/${srcSuffix}" media="(orientation: landscape) and (min-width: 1920px), (orientation: portrait) and (min-width: 1200px)"/>
                <source srcset="./images/3x/${srcSuffix}" media="(orientation: landscape) and (min-width: 1367px), (orientation: portrait) and (min-width: 880px)"/>
                <source srcset="./images/2x/${srcSuffix}" media="(orientation: landscape) and (min-width: 880px), (orientation: portrait) and (min-width: 570px)"/>
                <img class="podium__item__photo" src="./images/1x/${srcSuffix}">
            </picture>
        </div>
        <div class="podium__item__name ${selected && 'podium__item__name--selected'}">${name}</div>
        <div class="podium__item__score ${selected && 'podium__item__score--selected'}">${score}</div>`
    )
}

function PersonCardEmbedded(selectedUser) {
    const { name, avatar, valueText } = selectedUser
    let selectedPerson = '<div class="podium__item__awards podium__item__awards--selected">👍</div>'
    selectedPerson += PersonCardComponent(avatar, name, valueText, true)
    selectedPerson += '<div class="podium__item__delimiter"></div>'
    selectedPerson += `<div class="podium__item__place podium__item__place--selected">${selectedUser.index + 1}</div>`
    return selectedPerson
}


export default function PersonComponent({ srcSuffix, name, score, place, emoji, selectedUser, orientation }) {

    const barSizeModifier = (place >= 4) ? '-small' : (place >= 2) ? '-medium' : '-large';

    let selectedPerson;
    if (orientation.startsWith('portrait') && place == 1 && selectedUser?.index > 2) {
        selectedPerson = PersonCardEmbedded(selectedUser)
    } else if (orientation.startsWith('landscape') && place == 5 && selectedUser?.index > 4) {
        const { avatar: srcSuffix, name, valueText: score, index: place } = selectedUser;
        place++;
        selectedPerson = ''
    } else {
        selectedPerson = ''
    }
    
    let awardsEmoji;
    
    if (place == 1) {
        awardsEmoji = emoji
    } else if (selectedUser?.name === name) {
        awardsEmoji = '👍'
    } else {
        awardsEmoji = ''
    }

    return (
        `<div class="podium__item">
            <div class="podium__item__awards">${awardsEmoji}</div>
            ${PersonCardComponent(srcSuffix, name, score)}
            <div class="podium__item__bar podium__item__bar${barSizeModifier}">
                <div class="podium__item__place">${place}</div>
                ${selectedPerson}
            </div>
        </div>`
    )
}