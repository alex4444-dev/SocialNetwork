import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { createField, GetStringKeys, Input } from '../common/Forms/formsControl'
import { required } from '../../Utils/Validators/Validators'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import style from './LoginPage.module.scss'
import { AppStateType } from '../../redux/redux-store'

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
    = ({ handleSubmit, error, captchaUrl }) => {
        return (
            <div className={style.loginPage}>
                <form onSubmit={handleSubmit}>
                    <div className={style.loginBlock}>
                        <h1>Login</h1>
                        {createField<LoginFormValuesTypeKeys>('Email', 'email', [required], Input)}
                        {createField<LoginFormValuesTypeKeys>('Password', 'password', [required], Input, { type: 'password' })}
                        <div className={style.checkboxArea}>
                            {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}
                        </div>

                        {captchaUrl && <img src={captchaUrl} />}
                        {captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [required], Input, {})}


                        {error && <div className={style.formSummaryError}>
                            {error}

                        </div>
                        }
                        <button>Login</button>
                    </div>
                </form>
            </div>
        )
    }

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm)


export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

export const LoginPage: React.FC = () => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
}