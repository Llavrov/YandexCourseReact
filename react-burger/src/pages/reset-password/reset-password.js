import React from 'react';
import styles from './resetPassword.module.css';
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import { fetchResetPassword} from "../../redux/actions/user";
import {Link, Redirect, useLocation} from "react-router-dom";


function ResetPassword() {
    const [passValue, setPassValue] = React.useState('');
    const [tokenValue, setTokenValue] = React.useState('');
    const location = useLocation();
    const { from } = location.state || { from: {pathname: '/YandexCourseReact/'}};

    const dispatch = useDispatch();
    const { setNewPass } = useSelector(store => store.user);
    const { resetPass } = useSelector(store => store.user);

    function handleSavePassClick(event) {
        event.preventDefault()
        dispatch(fetchResetPassword('password-reset/reset', {password: passValue, token: tokenValue}));
        return false;
    }

    if (!resetPass) {
        return <Redirect to={{
            pathname: '/YandexCourseReact/forgot-password'
        }}/>
    }

    if (setNewPass) {
        return <Redirect to={{
            pathname: '/YandexCourseReact/'
        }}/>
    }

    return (
        <div className={styles.container}>
            <p className="text text_type_main-medium mb-6">
                Восстановление пароля
            </p>
            <form onSubmit={handleSavePassClick}>
                <div className="pb-6">
                    <PasswordInput placeholder={"Введите новый пароль"} onChange={e => setPassValue(e.target.value)} value={passValue} name={'password'} />
                </div>
                <div className="pb-6">
                    <Input type="text" placeholder={'Введите код из письма'} size={'default'} onChange={e => setTokenValue(e.target.value)} value={tokenValue} name={'text'} />
                </div>
                <div className="pb-20">
                    <Button type="primary" size="large">
                        Схоранить
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

export default ResetPassword;