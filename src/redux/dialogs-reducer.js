const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = { dialogs: [
        {id: 1, name: 'Lesha'},
        {id: 2, name: 'Yulia'},
        {id: 3, name: 'Nastya'},
        {id: 4, name: 'Larisa'},
        {id: 5, name: 'Ivan'},
        {id: 6, name: 'Efim'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi, sun'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Mom'},
        {id: 5, message: 'Lenta'},
        {id: 6, message: 'You'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer