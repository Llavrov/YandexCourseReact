import React from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon, } from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyle from './header.module.css';

class Header extends React.Component {

    render () {
        return (
            <header className={headerStyle.header}>
                <div className={headerStyle.container}>
                    <ul>
                        <li className={'pt-5 pb-5 pr-5'}>
                            <BurgerIcon className={headerStyle.icon}></BurgerIcon>
                            <p className="pl-2 text text_type_main-default">Конструктор</p>
                        </li>
                        <li className={'pt-5 pb-5 pr-5'}>
                            <ListIcon className={headerStyle.icon}></ListIcon>
                            <p className="pl-2 text text_type_main-default">Лента заказов</p>
                        </li>
                    </ul>
                    <div className={headerStyle.logo}>
                        <Logo></Logo>
                    </div>
                    <div className={`${headerStyle.profile} p-5`}>
                        <ProfileIcon className={headerStyle.icon}></ProfileIcon>
                        <p className="pl-2 text text_type_main-default">Личный кабинет</p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;