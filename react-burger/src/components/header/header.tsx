import React from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon, } from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyle from './header.module.css';
import { NavLink, useRouteMatch} from "react-router-dom";

function Header(){

    const isConstructor = !!useRouteMatch({path: '/YandexCourseReact/', exact: true})
    const isFeed = !!useRouteMatch('/YandexCourseReact/feed')
    const isProfile = !!useRouteMatch('/YandexCourseReact/profile')

    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.container}>
                <ul>
                    <NavLink
                        className={headerStyle.unactive}
                        to={{
                        pathname: '/YandexCourseReact/'
                    }}>
                        <li className={`${isConstructor && headerStyle.active} pt-4 pb-4 pr-5 pl-5 `}>
                            {/*// @ts-ignore*/}
                            <BurgerIcon type={`${isConstructor ? 'primary' : 'secondary'}`} className={headerStyle.icon}></BurgerIcon>
                            <p className="pl-2 text text_type_main-default">Конструктор</p>
                        </li>
                    </NavLink>
                    <NavLink
                        className={headerStyle.unactive}
                        to={{
                            pathname: '/YandexCourseReact/'
                    }}>
                        <li className={`${isFeed && headerStyle.active} pt-4 pb-4 pr-5 pl-5 `}>
                            {/*// @ts-ignore*/}
                            <ListIcon type={`${isFeed ? 'primary' : 'secondary'}`} className={headerStyle.icon}></ListIcon>
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
                    pathname: '/YandexCourseReact/profile'
                }}>
                    <div className={`${isProfile && headerStyle.active} ${headerStyle.profile} pt-4 pb-4 pr-5 pl-5 `}>
                        {/*// @ts-ignore*/}
                        <ProfileIcon type={`${isProfile ? 'primary' : 'secondary'}`} className={headerStyle.icon}></ProfileIcon>
                        <p className="pl-2 text text_type_main-default">Личный кабинет</p>
                    </div>
                </NavLink>
            </div>
        </header>
    )
}

export default Header;