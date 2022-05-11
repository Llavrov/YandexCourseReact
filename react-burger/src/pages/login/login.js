import React from 'react';
import {Input, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './loginStyles.module.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthorization} from "../../redux/actions/authorization";
import {Redirect} from "react-router-dom";

function Login() {
    const [emailValue, setEmailValue] = React.useState('bob@example.com')
    const onInputChange = e => {setEmailValue(e.target.value)}
    const [passValue, setPassValue] = React.useState('password')
    const onPassChange = e => {setPassValue(e.target.value)}

    const dispatch = useDispatch();
    const { getUser, ...auth } = useSelector(store => store.authorization)

    function handleLoginClick() {
        console.log(JSON.stringify({
            "email": emailValue,
            "password": passValue,
        }));
        dispatch(fetchAuthorization('auth/login', {
            "email": emailValue,
            "password": passValue,
        }));
        console.log(auth);
    }

    if( getUser() ) {
        console.log(getUser())
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
                <Input type="email" size={'default'} onChange={onInputChange} value={emailValue} name={'email'} />
            </div>
            <div className="pb-6">
                <PasswordInput onChange={onPassChange} value={passValue} name={'password'} />
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