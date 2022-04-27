import React from "react";
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import itemStyle from './burgerIngridients.module.css';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {ADD_CONSTRUCTOR_ITEM} from "../../redux/actions/constructor";
import {ADD_INGREDIENT_ITEM} from "../../redux/actions/ingredient";

function ItemBlock ({...props}){
    const dispatch = useDispatch();
    const constructorData = useSelector(store => store.constructorBurger.constructorData);
    const count = constructorData.filter(unit => unit._id == props._id).length;

    function onClickItem() {
        dispatch({
            type: ADD_CONSTRUCTOR_ITEM,
            item: {...props, index_id: `${count}${props._id}`},
        })
        dispatch({
            type: ADD_INGREDIENT_ITEM,
            item: props,
        })
        props.setClose(false);
    }
    return (
        <div className={`${itemStyle.container} ml-4`} onClick={() => onClickItem()}>
            <img className={`${itemStyle.image} pr-4 pl-4`} src={props.image} alt={props.image}/>
            <span className={`${itemStyle.price} pt-1 pb-1 text text_type_digits-default`}>
                {props.price} <CurrencyIcon type="primary" />
            </span>
            <p className={`${itemStyle.p} pb-8 text text_type_main-default`}>
                {props.name}
            </p>
        </div>
    )
}

export default ItemBlock;