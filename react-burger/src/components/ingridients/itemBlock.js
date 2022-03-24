import React from "react";
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import itemStyle from './itemBlock.module.css';
import PropTypes from 'prop-types';

function ItemBlock ({image = "https://code.s3.yandex.net/react/code/bun-02.png", price = 20, name = "lion", count = 0}){

    return (
        <div className={`${itemStyle.container} ml-4`}>
            <img className={`${itemStyle.image} pr-4 pl-4`} src={image} alt={image}/>
            <span style={{display: 'inline-flex', alignItems: "center", justifyContent: "flex-end"}}
                  className="pt-1 pb-1 text text_type_digits-default">{price} <CurrencyIcon type="primary" /></span>
            <p style={{maxWidth: "272px", textAlign: 'center'}}className="pb-8 text text_type_main-default">
                {name}
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