import React from 'react';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import data from "../../utils/data";
import PropTypes from 'prop-types';

function BacketItem({text = "Краторная булка N-200i (верх)", price = 50, thumbnail}) {
    return (
        <div style={{display: "flex", alignItems: 'center', justifyContent: 'space-between'}}>
            <span className={'pr-2'}><DragIcon type="primary"/></span>
            <ConstructorElement
                text={text}
                price={price}
                thumbnail={thumbnail || data[1].image}
            />
        </div>
    )
}

BacketItem.propTypes = {
    text: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
};

export default BacketItem;