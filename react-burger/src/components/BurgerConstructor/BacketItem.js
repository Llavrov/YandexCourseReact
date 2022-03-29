import React from 'react';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {itemData} from "../../utils/data";
import PropTypes from 'prop-types';
import componentStyle from './BurgerConstructor.module.css';

function BacketItem({text = "Краторная булка N-200i (верх)", price = 50, thumbnail}) {
    return (
        <div className={componentStyle.backetItem}>
            <span className={'pr-2'}><DragIcon type="primary"/></span>
            <ConstructorElement
                text={text}
                price={price}
                thumbnail={thumbnail || itemData[1].image}
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