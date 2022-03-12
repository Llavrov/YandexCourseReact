import React from 'react';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import getData from "../../utils/data";


function BacketItem({text = "Краторная булка N-200i (верх)", price = 50, thumbnail}) {
    const data = getData();
    return (
        <div style={{display: "flex", alignItems: 'center', justifyContent: 'space-between'}}>
            <DragIcon type="primary" className={'pr-4'}/>
            <ConstructorElement
                text={text}
                price={price}
                thumbnail={thumbnail || data[1].image}
            />
        </div>
    )
}

export default BacketItem;