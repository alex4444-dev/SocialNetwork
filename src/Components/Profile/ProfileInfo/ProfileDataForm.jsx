import React from "react";
import s from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../common/Forms/formsControl";
import {reduxForm} from "redux-form";
import style from "../../common/Forms/formsControl.module.css"


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <div className={s.infoForm}>
    <div>
    <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b> Full name:</b> {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b> Looking for a job:</b> { createField("", "LookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b> My professional skills:</b> {profile.lookingForAJobDescription}
            { createField("My professional skills", "lookingForAJobDescription", [], Textarea )}
        </div>
        <div>
            <b>About Me:</b> {profile.aboutMe}
            { createField("About me", "AboutMe", [], Textarea )}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div className={s.contact}>
                <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        }) }
        </div>
    </form>
    </div>
    </div>

}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'}) (ProfileDataForm)

export default ProfileDataFormReduxForm;