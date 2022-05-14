import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, GetStringKeys, Textarea } from '../../../common/Forms/formsControl';
import { required } from '../../../../Utils/Validators/Validators';
import s from './AddPostForm.module.scss';
import { Nullable } from '../../../../types/types'

type PropsType = {

}

export type AddPostFormValuesType = {
    newPostText: string
}



type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {




    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.addPostForm}>
                {createField<AddPostFormValuesTypeKeys>("Your post", 'newPostText', [required], Textarea)}
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm<AddPostFormValuesType, PropsType>({ form: 'profile-add-post' })(AddPostForm)