import React, {FC, Dispatch, SetStateAction} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import itemStyle from './burgerIngridients.module.css';

interface TabProps {
    current: string;
    setCurrent: Dispatch<SetStateAction<string>>;
}

const TabBurger: FC<TabProps> = ({current='Булки', setCurrent}) => {

    return (
        <div className={itemStyle.tabBurger}>
    {/*// @ts-ignore        */}
            <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                Булки
            </Tab>
    {/*// @ts-ignore*/}
            <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                Соусы
            </Tab>
    {/*// @ts-ignore*/}
            <Tab value="Котлеты" active={current === 'Начинка'} onClick={setCurrent}>
                Котлеты
            </Tab>
        </div>
    )
}

export default TabBurger;