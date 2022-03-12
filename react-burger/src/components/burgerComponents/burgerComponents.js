import React from 'react';
import {ConstructorElement, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import getData from '../../utils/data';
import BacketItem from "./BacketItem";

function BurgerComponents() {
    const data = getData();
    return (
        <div>
            <div className={'pt-25 pb-10 pl-4 pr-4'} style={{ display: 'flex', flexDirection: 'column', gap: '10px',
            justifyContent: "right"}}>
                <div className={'pl-8'}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={data[0].image}
                    />
                </div>
                <BacketItem></BacketItem>
                <BacketItem></BacketItem>
                <BacketItem></BacketItem>
                <div className={'pl-8'}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={data[2].image}
                    />
                </div>
            </div>
            <div style={{float: "right", display: "flex", alignItems: 'center'}}>
                <p className="text text_type_digits-medium pr-10">240<CurrencyIcon type="primary" /></p>
                <Button type="primary" size="large">
                    Нажми на меня
                </Button>
            </div>
        </div>
    )
}

export default BurgerComponents;