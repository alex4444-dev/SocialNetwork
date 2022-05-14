import React from 'react';
import s from "../Dialogs.module.scss";
import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, Textarea } from '../../common/Forms/formsControl';
import { maxLengthCreator, required } from "../../../Utils/Validators/Validators";
import { NewMessageFormValuesType } from '../Dialogs';



const maxLength50 = maxLengthCreator(50);

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType>
    = (props) => {
        return (
            <div className={s.addMessageFormContainer}>
                <div className={s.addMessageForm}>
                    <div className={s.textField}>
                        {createField<NewMessageFormValuesKeysType>("Enter your message", 'newMessageBody', [required, maxLength50], Textarea)}
                        <div>
                            <button onClick={props.handleSubmit}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default reduxForm<NewMessageFormValuesType>({ form: 'dialog-add-message-form' })(AddMessageForm);

