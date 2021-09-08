const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = { dialogs: [
        {id: 1, name: 'Lesha'},
        {id: 2, name: 'Yulia'},
        {id: 3, name: 'Nastya'},
        {id: 4, name: 'Larisa'},
        {id: 5, name: 'Ivan'},
        {id: 6, name: 'Efim'}
    ],
    message: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi, sun'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Mom'},
        {id: 5, message: 'Lenta'},
        {id: 6, message: 'You'}
    ],
    newMessageBody: ""};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.message.push({id: 7, message: body});
            return state;
        default:
            return state;

    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer