import React from 'react';
import styles from './forgotPassword.module.css';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {fetchForgotPassword} from "../../redux/actions/user";
import {Redirect} from "react-router-dom";


function ForgotPassword() {
    const [emailValue, setEmailValue] = React.useState('')
    const dispatch = useDispatch();

    const { resetPass, messageError } = useSelector(store => store.user);

    function handleSavePassClick() {
        console.log({email: emailValue});
        dispatch(fetchForgotPassword('password-reset', {email: emailValue}));
    }

    if (resetPass) {
        return <Redirect to={{
            pathname: '/reset-password'
        }}/>
    }

    return (
        <div className={styles.container}>
            <p className="text text_type_main-medium mb-6">
                Восстановление пароля
            </p>
            <div className="pb-6">
                <Input type="text" placeholder={'Укажите e-mail'} size={'default'} onChange={e => setEmailValue(e.target.value)} value={emailValue} name={'text'} />
            </div>
            <div className="pb-20">
                <Button type="primary" size="large" onClick={handleSavePassClick}>
                    Восстановить
                </Button>
            </div>

            <p className="text text_type_main-small">
                Вспомнили пароль? Войти
            </p>
        </div>
    )
}

export default ForgotPassword;