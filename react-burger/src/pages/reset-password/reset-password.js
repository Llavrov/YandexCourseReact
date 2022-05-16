import React from 'react';
import styles from './resetPassword.module.css';
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {fetchForgotPassword} from "../../redux/actions/user";
import {Redirect} from "react-router-dom";


function ResetPassword() {
    const [passValue, setPassValue] = React.useState('')
    const [emailValue, setEmailValue] = React.useState('')

    const dispatch = useDispatch();
    const { setNewPass, messageError } = useSelector(store => store.user);

    function handleSavePassClick() {
        dispatch(fetchForgotPassword('password-reset/reset', {email: emailValue}));
    }

    if (setNewPass) {
        return <Redirect to={{
            pathname: '/'
        }}/>
    }

    return (
        <div className={styles.container}>
            <p className="text text_type_main-medium mb-6">
                Восстановление пароля
            </p>
            <div className="pb-6">
                <PasswordInput placeholder={"Введите новый пароль"} onChange={e => setPassValue(e.target.value)} value={passValue} name={'password'} />
            </div>
            <div className="pb-6">
                <Input type="text" placeholder={'Введите код из письма'} size={'default'} onChange={e => setEmailValue(e.target.value)} value={emailValue} name={'text'} />
            </div>
            <div className="pb-20">
                <Button type="primary" size="large" onClick={handleSavePassClick}>
                    Схоранить
                </Button>
            </div>

            <p className="text text_type_main-small">
                Вспомнили пароль? Войти
            </p>
        </div>
    )
}

export default ResetPassword;