import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/Forms/formsControl";
import {maxLengthCreator, required} from "../../../Utils/Validators/Validators";


const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength100]}

                       placeholder='Enter your message' name="newMessageBody" />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);
