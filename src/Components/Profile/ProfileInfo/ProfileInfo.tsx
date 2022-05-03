import React, { ChangeEvent, useState } from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/no_avatar.png";
import ProfileDataForm from "./ProfileDataForm";
import { ContactsType, ProfileType } from '../../../types/types';


type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                {isOwner && <div className={s.uploadContainer}><input id={"file-input"} type={"file"} onChange={onMainPhotoSelected} />
                    <label htmlFor={"file-input"}>✎ Загрузить фото</label></div>}


                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
            </div>
        </div>
    )
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileData: React.FC<ProfileDataPropsType> = ({ profile, isOwner, goToEditMode }) => {
    return <div className={s.majorInfo}>
        {isOwner && <div><button className={s.editButton} onClick={goToEditMode}>✎</button></div>}
        <div className={s.fullName}>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div className={s.skills}>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }

        <div className={s.majorInfo}>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div className={s.contacts}>
            <b>Contacts</b>: {
                Object
                    .keys(profile.contacts)
                    .map((key) => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
                    })}
        </div>
    </div>
}


type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}
const Contact: React.FC<ContactsPropsType> = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;