import React from 'react';
import styles from './forgotPassword.module.css';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {fetchForgotPassword} from "../../redux/actions/user";
import {Link, Redirect, useLocation} from "react-router-dom";


function ForgotPassword() {
    const [emailValue, setEmailValue] = React.useState('')
    const dispatch = useDispatch();
    const location = useLocation();
    const { from } = location.state || { from: {pathname: '/YandexCourseReact/'}};


    const { resetPass } = useSelector(store => store.user);

    function handleSavePassClick(event) {
        event.preventDefault()
        dispatch(fetchForgotPassword('password-reset', {email: emailValue}));
        return false;
    }

    if (resetPass) {
        return <Redirect to={{
            pathname: '/YandexCourseReact/reset-password'
        }}/>
    }

    return (
        <div className={styles.container}>
            <p className="text text_type_main-medium mb-6">
                Восстановление пароля
            </p>
            <form onSubmit={handleSavePassClick}>
                <div className="pb-6">
                    <Input type="text" placeholder={'Укажите e-mail'} size={'default'} onChange={e => setEmailValue(e.target.value)} value={emailValue} name={'text'} />
                </div>
                <div className="pb-20">
                    <Button type="primary" size="large">
                        Восстановить
                    </Button>
                </div>
            </form>

            <p className="text text_type_main-small">
                Вспомнили пароль? <Link
                to={{
                    pathname: '/YandexCourseReact/login',
                    state: {from}
                }}>
                Войти
            </Link>
            </p>
        </div>
    )
}

export default ForgotPassword;