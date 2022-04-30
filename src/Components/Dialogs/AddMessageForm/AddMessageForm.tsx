import React from 'react';
import s from './AddMessageForm.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input, Textarea} from '../../common/Forms/formsControl';
import {maxLengthCreator, required} from "../../../Utils/Validators/Validators";
import {NewMessageFormValuesType} from '../Dialogs';


const maxLength50 = maxLengthCreator(50);

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType>
    = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textArea}>
                {createField<NewMessageFormValuesKeysType>("Enter your message", 'newMessageBody', [required, maxLength50], Textarea)}
    </div>
    <div>
    <button>Send</button>
    </div>
    </form>
)
}

export default reduxForm<NewMessageFormValuesType>({form: 'dialog-add-message-form'})(AddMessageForm);

