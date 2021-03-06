import React from "react";
import s from './ProfileInfo.module.scss';
import { createField, GetStringKeys, Input, Textarea } from "../../common/Forms/formsControl";
import { InjectedFormProps, reduxForm } from "redux-form";
import style from "../../common/Forms/formsControl.module.css";
import { ProfileType } from '../../../types/types';



type PropsType = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <div className={s.descriptionBlock}>
            <div className={s.infoForm}>
                <div>
                    <button>💾</button>
                </div>
                {error && <div className={style.formSummaryError}>
                    {error}
                </div>
                }

                <div>
                    <b>Full name</b>: {createField<ProfileTypeKeys>("Full name", "fullName", [], Input)}
                </div>
                <div className={style.checkboxArea}>
                    <label>Looking for a job</label>: {createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, { type: "checkbox" })}
                </div>
                <div>
                    <b>My professional skills</b>:
                    {createField<ProfileTypeKeys>("My professional skills", "lookingForAJobDescription", [], Textarea)}
                </div>
                <div>
                    <b>About me</b>:
                    {createField<ProfileTypeKeys>("About me", "aboutMe", [], Textarea)}
                </div>

                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={s.contact}>
                            <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                        </div>
                    })}
                </div>

            </div>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;