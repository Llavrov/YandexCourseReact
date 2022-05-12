import React from 'react';
import {Input, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './loginStyles.module.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthorization} from "../../redux/actions/user";
import {Redirect} from "react-router-dom";

function Login() {
    const [emailValue, setEmailValue] = React.useState('levlevlavrov@gmail.com')
    const [passValue, setPassValue] = React.useState('Lion2020')

    const dispatch = useDispatch();
    const { getUser } = useSelector(store => store.user)

    function handleLoginClick() {
        dispatch(fetchAuthorization('auth/login', {
            "email": emailValue,
            "password": passValue,
        }));
    }

    if( getUser() ) {
        return <Redirect to={{
            pathname: '/'
        }}/>
    }

    return (
        <div className={styles.container}>
            <p className="text text_type_main-medium mb-6">
                Вход
            </p>
            <div className="pb-6">
                <Input type="email" size={'default'} onChange={e => setEmailValue(e.target.value)} value={emailValue} name={'email'} />
            </div>
            <div className="pb-6">
                <PasswordInput onChange={e => setPassValue(e.target.value)} value={passValue} name={'password'} />
            </div>
            <div className="pb-20">
                <Button type="primary" size="large" onClick={handleLoginClick}>
                    Войти
                </Button>
            </div>

            <p className="text text_type_main-small pb-4">
                Вы - новый пользователь? Зарегистрироваться
            </p>
            <p className="text text_type_main-small">
                Забыли пароль? Восстановить пароль
            </p>
        </div>
    )
}


export default Login;