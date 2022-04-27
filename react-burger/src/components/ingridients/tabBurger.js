import React from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import itemStyle from './burgerIngridients.module.css';

function TabBurger({current = 'Булки', setCurrent}) {

    return (
        <div className={itemStyle.tabBurger}>
            <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="Котлеты" active={current === 'Начинка'} onClick={setCurrent}>
                Котлеты
            </Tab>
        </div>
    )
}

export default TabBurger;