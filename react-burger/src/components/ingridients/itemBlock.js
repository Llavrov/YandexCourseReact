import React from "react";
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import itemStyle from './burgerIngridients.module.css';
import PropTypes from 'prop-types';

function ItemBlock ({...props}){
    function onClickItem() {
        props.setInfo(props);
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

ItemBlock.propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.number,
}


export default ItemBlock;