const ADD_POST = 'ADD_POST'

const initialState = {
    posts: [
        {
            id: 1,
            content: 'Heeeey!'
        },
        {
            id: 2,
            content: 'How are you?'
        },
        {
            id: 3,
            content: `What's up!`
        }
    ],
    newPostBody: ''
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return state
        default:
            return state
    }
}
export default ProfileReducer