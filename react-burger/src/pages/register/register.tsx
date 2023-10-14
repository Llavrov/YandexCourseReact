import React, {FormEvent} from 'react';
import {Input, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './registerStyles.module.css';
import {useDispatch, useSelector} from "react-redux";
import {Link, Redirect, useLocation} from "react-router-dom";
import {fetchRegistration} from "../../redux/actions/user";
import {RootState} from "../../index";

function Register() {
    const [emailValue, setEmailValue] = React.useState('bob@example.com')
    const [nameValue, setNameValue] = React.useState('name')
    const [passValue, setPassValue] = React.useState('password')
    const location = useLocation();
    const {from}: any = location.state || { from: {pathname: '/YandexCourseReact/'}};

    const dispatch = useDispatch();
    const { getUser } = useSelector((store: RootState) => store.user)

    function handleRegisterClick(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        dispatch(fetchRegistration('auth/register', {
            "email": emailValue,
            "password": passValue,
            "name": nameValue,
        }));
        return false;
    }

    if( getUser() ) {
        console.log(getUser())
        return <Redirect to={{
            pathname: '/YandexCourseReact/'
        }}/>
    }


    return (
        <div className={styles.container}>
            <p className="text text_type_main-medium mb-6">
                Регистрация
            </p>
            <form onSubmit={handleRegisterClick}>
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
                    {/*// @ts-ignore*/}
                    <Button type="primary" size="large">
                        Зарегистрироваться
                    </Button>
                </div>
            </form>

            <p className="text text_type_main-small pb-4">
                Уже зарегистрированны? <Link
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


export default Register;