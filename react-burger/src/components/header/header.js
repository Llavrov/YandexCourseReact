import React, {useEffect} from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon, } from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyle from './header.module.css';
import {useLocation, NavLink} from "react-router-dom";

function Header(){
    const location = useLocation();
    const { from } = location.state || { from: {pathname: '/YandexCourseReact/'}};
    const [activeBar, setActive] = React.useState(location.pathname === '/YandexCourseReact/' ? 'main' : location.pathname === '/YandexCourseReact/line' ? 'line' : 'profile')

    useEffect(() => {
        setActive(location.pathname === '/YandexCourseReact/' ? 'main' : location.pathname === '/YandexCourseReact/line' ? 'line' : 'profile')
    }, [location])

    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.container}>
                <ul>
                    <NavLink
                        className={headerStyle.unactive}
                        to={{
                        pathname: '/YandexCourseReact/',
                        state: {from}
                    }}>
                        <li className={`${activeBar === 'main' && headerStyle.active} pt-4 pb-4 pr-5 pl-5 `}>
                            <BurgerIcon type={`${activeBar === 'main' ? 'primary' : 'secondary'}`}  className={headerStyle.icon}></BurgerIcon>
                            <p className="pl-2 text text_type_main-default">Конструктор</p>
                        </li>
                    </NavLink>
                    <NavLink
                        className={headerStyle.unactive}
                        to={{
                            pathname: '/YandexCourseReact/',
                            state: {from}
                    }}>
                        <li className={`${activeBar === 'line' && headerStyle.active} pt-4 pb-4 pr-5 pl-5 `}>
                            <ListIcon type={`${activeBar === 'line' ? 'primary' : 'secondary'}`} className={headerStyle.icon}></ListIcon>
                            <p className="pl-2 text text_type_main-default">Лента заказов</p>
                        </li>
                    </NavLink>
                </ul>
                <div className={headerStyle.logo}>
                    <Logo></Logo>
                </div>
                <NavLink
                    className={headerStyle.unactive}
                    to={{
                    pathname: '/YandexCourseReact/profile',
                    state: {from}
                }}>
                    <div className={`${activeBar === 'profile' && headerStyle.active} ${headerStyle.profile} pt-4 pb-4 pr-5 pl-5 `}>
                        <ProfileIcon type={`${activeBar === 'profile' ? 'primary' : 'secondary'}`} className={headerStyle.icon}></ProfileIcon>
                        <p className="pl-2 text text_type_main-default">Личный кабинет</p>
                    </div>
                </NavLink>
            </div>
        </header>
    )
}

export default Header;