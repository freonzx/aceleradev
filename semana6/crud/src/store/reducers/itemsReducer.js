import Mock from '../../seeds/mock'

const initState = {
    data: Mock,
    selected: null
}

const itemsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SELECT_CARD':
            console.log(action)
            return {
                ...state,
                selected: action.payload
            }
        case 'DELETE_CARD':
            return {
                ...state,
                data: state.data.filter(e => {
                    return e.id !== action.id
                })
            }
        case 'ADD_CARD':
            return {
                ...state,
                data: [...state.data, action.newItem]
            }
        case 'EDIT_CARD':
            const newState = state.data.filter(e => {
                return e.id !== action.newItem.id
            })
            return {
                ...state,
                data: [...newState, action.newItem]
            }
        default:
            return state
    }
}

export default itemsReducer
