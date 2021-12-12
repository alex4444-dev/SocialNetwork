const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = { dialogs: [
        {id: 1, name: 'Alexey'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Sveta'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi, How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'hi'},
        {id: 5, message: 'Lenta'},
        {id: 6, message: 'You'}
    ] as Array<MessageType>
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer