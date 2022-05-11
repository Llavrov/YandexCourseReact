import React from 'react';
import {Input, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './registerStyles.module.css';
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {fetchRegistration} from "../../redux/actions/registration";

function Register() {
    const [emailValue, setEmailValue] = React.useState('bob@example.com')
    const [nameValue, setNameValue] = React.useState('name')
    const [passValue, setPassValue] = React.useState('password')

    const dispatch = useDispatch();
    const { getUser } = useSelector(store => store.registration)

    function handleLoginClick() {
        dispatch(fetchRegistration('auth/register', {
            "email": emailValue,
            "password": passValue,
            "name": nameValue,
        }));
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
                Регистрация
            </p>
            <div className="pb-6">
                <Input type="email" size={'default'} onChange={e => setNameValue(e.target.value)} value={nameValue} name={'email'} />
            </div>
            <div className="pb-6">
                <Input type="email" size={'default'} onChange={e => setEmailValue(e.target.value)} value={emailValue} name={'email'} />
            </div>
            <div className="pb-6">
                <PasswordInput onChange={e => setPassValue(e.target.value)} value={passValue} name={'password'} />
            </div>
            <div className="pb-20">
                <Button type="primary" size="large" onClick={handleLoginClick}>
                    Зарегистрироваться
                </Button>
            </div>

            <p className="text text_type_main-small pb-4">
                Уже зарегистрированны? Войти
            </p>
        </div>
    )
}


export default Register;