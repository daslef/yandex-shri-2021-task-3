import PersonComponent from './PersonComponent'


export default function PodiumComponent(users, emoji, orientation, selected) {

    return (
        `<div class="slide__content podium podium--${orientation}">
            ${users
                .slice(0, 5)
                .map((user, ix) => PersonComponent({
                    srcSuffix: user.avatar,
                    name: user.name,
                    score: user.valueText,
                    place: ix + 1,
                    emoji: emoji,
                    selectedUser: selected, 
                    orientation: orientation}))
                .join('')
            }
        </div>`
    )
}