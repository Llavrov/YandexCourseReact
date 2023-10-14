import React, {FormEvent} from 'react';
import {Input, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './loginStyles.module.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthorization} from "../../redux/actions/user";
import {Redirect, Link, useLocation} from "react-router-dom";
import {RootState} from "../../index";

function Login() {
    const [emailValue, setEmailValue] = React.useState('levlevlavrov@gmail.com')
    const [passValue, setPassValue] = React.useState('Lion2020')
    const location = useLocation();
    const {from}: any = location.state || { from: {pathname: '/YandexCourseReact/'}};

    const dispatch = useDispatch();
    const { getUser } = useSelector((store: RootState) => store.user)

    function handleLoginClick(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        dispatch(fetchAuthorization('auth/login', {
            "email": emailValue,
            "password": passValue,
        }));
        return false;
    }

    if( getUser() ) {
        return <Redirect to={from}/>
    }

    return (
        <div className={styles.container}>
            <p className="text text_type_main-medium mb-6">
                Вход
            </p>
            <form onSubmit={(e) => handleLoginClick(e)}>
                <div className="pb-6">
                    <Input type="email" size={'default'} onChange={e => setEmailValue(e.target.value)} value={emailValue} name={'email'} />
                </div>
                <div className="pb-6">
                    <PasswordInput onChange={e => setPassValue(e.target.value)} value={passValue} name={'password'} />
                </div>
                <div className="pb-20">
                    {/*// @ts-ignore*/}
                    <Button type="primary" size="large">
                        Войти
                    </Button>
                </div>
            </form>

            <p className="text text_type_main-small pb-4">
                Вы - новый пользователь? <Link
                    to={{
                        pathname: '/YandexCourseReact/register',
                        state: {from}
                    }}>
                     Зарегистрироваться
                </Link>
            </p>
            <p className="text text_type_main-small">
                Забыли пароль? <Link
                to={{
                    pathname: '/YandexCourseReact/forgot-password',
                    state: {from}
                }}>
                Восстановить пароль
            </Link>
            </p>
        </div>
    )
}


export default Login;