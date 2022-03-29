import React from 'react';
import IngridientStyle from './ModalItem.module.css';

function IngridientDetails({...props}){;

    return (
        <>
            <img className={`${IngridientStyle.image} pb-4`} src={props.image} alt={`${props.image}`}/>
            <p className="pb-8 text text_type_main-medium">{props.name}</p>
            <ul className={`${IngridientStyle.ul} pb-15`}>
                <li className={`pr-5 ${IngridientStyle.li}`}>
                    <p className="text text_type_main-small pb-2">Калории,ккал</p>
                    <p className="text text_type_digits-default">{props.calories}</p>
                </li>
                <li className={`pr-5 ${IngridientStyle.li}`}>
                    <p className="text text_type_main-small pb-2">Белки, г</p>
                    <p className="text text_type_digits-default">{props.proteins}</p>
                </li>
                <li className={`pr-5 ${IngridientStyle.li}`}>
                    <p className="text text_type_main-small pb-2">Жиры, г</p>
                    <p className="text text_type_digits-default">{props.fat}</p>
                </li>
                <li className={IngridientStyle.li}>
                    <p className="text text_type_main-small pb-2">Углеводы, г</p>
                    <p className="text text_type_digits-default">{props.carbohydrates}</p>
                </li>
            </ul>
        </>
    )
}

export default IngridientDetails;