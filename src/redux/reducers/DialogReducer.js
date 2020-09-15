const ADD_MESSAGE = 'ADD_MESSAGE'

const initialState = {
    messages: []
}

const DialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return state
        default:
            return state
    }
}
export default DialogReducer