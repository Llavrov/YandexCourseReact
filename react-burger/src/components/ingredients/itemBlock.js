import React from "react";
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import itemStyle from './burgerIngridients.module.css';
import {useSelector} from "react-redux";
import {useDrag} from "react-dnd";
import {TypesData} from "../../utils/types";
import {Link, useLocation} from "react-router-dom";

function ItemBlock ({...props}){
    const constructorData = useSelector(store => store.constructorBurger.constructorData);
    const constructorBun = useSelector(store => store.constructorBurger.constructorBun);
    const countItems = constructorBun._id === props._id ? 1 : constructorData.filter(item => item._id === props._id).length;

    let location = useLocation();

    const [{ isDrag }, drag] = useDrag({
        type: "Ingredient",
        item: { ...props },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    })

    return (
        <div
             draggable
             ref={drag}
             className={ isDrag ? `${itemStyle.dragActive} ${itemStyle.container} ml-4` : `${itemStyle.container} ml-4`}
        >
            <Link
                to={{
                    pathname: `/YandexCourseReact/ingredients/${props._id}`,
                    state: { background: location }
                }}
            >
                {!!countItems && <span className={`${itemStyle.count} text text_type_digits-default`}>
                {countItems}
            </span>}
                <img className={`${itemStyle.image} pr-4 pl-4`} src={props.image} alt={props.image}/>
                <span className={`${itemStyle.price} pt-1 pb-1 text text_type_digits-default`}>
                {props.price} <CurrencyIcon type="primary" />
            </span>
                <p className={`${itemStyle.p} pb-8 text text_type_main-default`}>
                    {props.name}
                </p>
            </Link>
        </div>
    )
}

ItemBlock.propTypes = {
    item: TypesData,
};

export default ItemBlock;