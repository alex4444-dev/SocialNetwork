import { v1 } from "uuid";
import { InferActionsTypes } from "./redux-store";


type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        { id: 1, name: 'Alexey' },
        { id: 2, name: 'Dimych' },
        { id: 3, name: 'Viktor' },
        { id: 4, name: 'Valera' },
        { id: 5, name: 'Sasha' },
        { id: 6, name: 'Sveta' }
    ] as Array<DialogType>,
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hi, How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'hi' },
        { id: 5, message: 'Lenta' },
        { id: 6, message: 'You' }
    ] as Array<MessageType>
};



const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 7, message: body }]
            }
        default:
            return state;
    }
}


export const actions = {
    sendMessage: (newMessageBody: string) => ({ type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody } as const)
}

export default dialogsReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>