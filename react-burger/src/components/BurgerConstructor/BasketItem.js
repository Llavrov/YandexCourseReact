import React from 'react';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import componentStyle from './BurgerConstructor.module.css';
import {useDispatch} from "react-redux";
import {DELETE_CONSTRUCTOR_ITEM} from "../../redux/actions/constructor";

function BasketItem({item}) {
    const dispatch = useDispatch();
    function handleCloseItem() {
        dispatch({
            type: DELETE_CONSTRUCTOR_ITEM,
            item: item,
        })
    }

    return (
        <div className={componentStyle.backetItem}>
            <span className={'pr-2'}><DragIcon type="primary"/></span>
            <ConstructorElement
                handleClose={handleCloseItem}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
            />
        </div>
    )
}


export default BasketItem;