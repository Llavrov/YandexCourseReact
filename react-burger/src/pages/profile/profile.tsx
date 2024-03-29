import React, {useEffect} from 'react';
import styles from './profile.module.css';
import {Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {checkUserAuth, logout} from "../../redux/actions/user";
import {RootState} from "../../index";


function Profile() {
    const {user} = useSelector((store: RootState) => store.user);
    const [loginValue, setLoginValue] = React.useState(user.email)
    const [nameValue, setNameValue] = React.useState(user.name)
    const [passValue, setPassValue] = React.useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserAuth());
    }, []);

    function handleLogout() {
        // @ts-ignore
        dispatch(logout()).then(() => {
                dispatch(checkUserAuth());
            })
    }

    return (
        <div className={styles.profile}>
            <ul className={styles.menu}>
                <li>
                    <p className="text text_type_main-medium mb-6">
                        Профиль
                    </p>
                </li>
                <li>
                    <p className="text text_type_main-medium mb-6">
                        История заказов
                    </p>
                </li>
                <li>
                    <p onClick={handleLogout} className="text text_type_main-medium mb-6">
                        Выход
                    </p>
                </li>
            </ul>
            <form  className={styles.container}>
                <div>
                    <div className="pb-6">
                        <Input icon={'EditIcon'} type="text" placeholder={'Логин'} size={'default'} onChange={e => setLoginValue(e.target.value)} value={loginValue} name={'text'} />
                    </div>
                    <div className="pb-6">
                        <Input icon={'EditIcon'} type="text" placeholder={'Имя'} size={'default'} onChange={e => setNameValue(e.target.value)} value={nameValue} name={'text'} />
                    </div>
                    <div className="pb-6">
                        {/*@ts-ignore*/}
                        <PasswordInput icon={'EditIcon'} placeholder={"Введите новый пароль"} onChange={e => setPassValue(e.target.value)} value={passValue} name={'password'} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Profile;