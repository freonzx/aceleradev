export const selectCard = item => {
    return {
        type: 'SELECT_CARD',
        payload: item
    }
}

export const deleteCard = id => {
    return {
        type: 'DELETE_CARD',
        id: id
    }
}

export const addCard = newItem => {
    return {
        type: 'ADD_CARD',
        newItem: { ...newItem, id: new Date().getTime() }
    }
}

export const editCard = newItem => {
    return {
        type: 'EDIT_CARD',
        newItem
    }
}
