import React from "react";
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import itemStyle from './itemBlock.module.css';
import PropTypes from 'prop-types';
import IngridientDetails from "../modal/IngridientDetails";

function ItemBlock ({...props}){
    const [isClose, setOpen] = React.useState(true);

    return (
        <div className={`${itemStyle.container} ml-4`} onClick={() => setOpen(!isClose)}>
            {!isClose && <IngridientDetails {...props} setOpen={setOpen}></IngridientDetails>}
            <img className={`${itemStyle.image} pr-4 pl-4`} src={props.image} alt={props.image}/>
            <span style={{display: 'inline-flex', alignItems: "center", justifyContent: "flex-end"}}
                  className="pt-1 pb-1 text text_type_digits-default">{props.price} <CurrencyIcon type="primary" /></span>
            <p style={{maxWidth: "272px", textAlign: 'center'}} className="pb-8 text text_type_main-default">
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