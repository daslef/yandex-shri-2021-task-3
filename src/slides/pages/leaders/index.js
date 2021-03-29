import PodiumComponent from './PodiumComponent'


export default function LeadersSlide(emoji, users, selectedUsedId) {

    let selectedUser;
    
    if (selectedUsedId) {
        const selectedUserIndex = users
            .map(object => object.id)
            .indexOf(selectedUsedId)

        selectedUser = { 
            ...users[selectedUserIndex], 
            index: selectedUserIndex 
        }
    }

    return (
        `${PodiumComponent(users, emoji, 'portrait', selectedUser)}
        ${PodiumComponent(users, emoji, 'landscape', selectedUser)}`
    )
}