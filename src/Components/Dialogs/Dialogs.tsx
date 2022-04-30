import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import {InitialStateType} from '../../redux/dialogs-reducer';

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}

export type NewMessageFormValuesType = {
    newMessageBody: string
}

const Dialogs: React.FC<PropsType> = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );

    let addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogsPage}>
            <div className={s.dialogsPageBlock}>
                <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                        { dialogsElements }
                    </div>
                    <div className={s.fieldWithoutMessages}>
                        { messagesElements }
                    </div>
                </div>
                <AddMessageForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

export default Dialogs;