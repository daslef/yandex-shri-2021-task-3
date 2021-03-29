import ArrowComponent from './ArrowComponent'
import PersonComponent from './PersonComponent'


export default function VoteSlide(emoji, selectedUserId, data) {
    
    function renderPerson(user) {
        return PersonComponent({
            srcSuffix: user.avatar,
            name: user.name,
            id: user.id,
            selected: user.id === selectedUserId
        })
    }

    const offsetPrevious = 0
    const offsetNext = 8

    return (
        `<div class="slide__content vote vote--portrait">
            <div class="slide__row slide__row--left">
                ${renderPerson(data[0])}
                ${renderPerson(data[3])}
                ${renderPerson(data[6])}
            </div>
            <div class="slide__row slide__row--middle">
                ${ArrowComponent({direction: 'up', selected: false, offset: offsetPrevious })}
                ${renderPerson(data[1])}
                ${renderPerson(data[4])}
                ${ArrowComponent({direction: 'down', selected: true, offset: offsetNext })}
            </div>
            <div class="slide__row slide__row--right">
                ${renderPerson(data[2])}
                ${renderPerson(data[5])}
                ${renderPerson(data[7])}
            </div>
        </div>

        <div class="slide__content vote vote--landscape">
            <div class="slide__column slide__column--1">
                ${renderPerson(data[0])}
            </div>
            <div class="slide__column slide__column--2">
                ${renderPerson(data[1])}
                ${renderPerson(data[4])}
            </div>
            <div class="slide__column slide__column--3">
                ${ArrowComponent({direction: 'up', selected: false})}
                ${ArrowComponent({direction: 'down', selected: true})}
            </div>
            <div class="slide__column slide__column--4">
                ${renderPerson(data[2])}
                ${renderPerson(data[5])}
            </div>
            <div class="slide__column slide__column--5">
                ${renderPerson(data[3])}
            </div>
        </div>`

    )
}
