import React from 'react';
import {Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function TabBurger() {
    const [current, setCurrent] = React.useState('one')
    return (
        <div style={{ display: 'flex' }}>
            <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="Котлеты" active={current === 'Котлеты'} onClick={setCurrent}>
                Котлеты
            </Tab>
        </div>
    )
}

export default TabBurger;