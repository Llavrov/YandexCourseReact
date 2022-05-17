import React from 'react';
import IngridientStyle from './ModalItem.module.css';
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

function IngredientDetails(){
    const location = useLocation();
    const data = useSelector(store => store.burger.burgersData);
    const ingredientData = data.find(i => i._id === location.pathname.split('/').pop()) || null;

    return ingredientData && (
        <>
            <img className={`${IngridientStyle.image} pb-4`} src={ingredientData.image} alt={`${ingredientData.image}`}/>
            <p className="pb-8 text text_type_main-medium">{ingredientData.name}</p>
            <ul className={`${IngridientStyle.ul} pb-15`}>
                <li className={`pr-5 ${IngridientStyle.li}`}>
                    <p className="text text_type_main-small pb-2">Калории,ккал</p>
                    <p className="text text_type_digits-default">{ingredientData.calories}</p>
                </li>
                <li className={`pr-5 ${IngridientStyle.li}`}>
                    <p className="text text_type_main-small pb-2">Белки, г</p>
                    <p className="text text_type_digits-default">{ingredientData.proteins}</p>
                </li>
                <li className={`pr-5 ${IngridientStyle.li}`}>
                    <p className="text text_type_main-small pb-2">Жиры, г</p>
                    <p className="text text_type_digits-default">{ingredientData.fat}</p>
                </li>
                <li className={IngridientStyle.li}>
                    <p className="text text_type_main-small pb-2">Углеводы, г</p>
                    <p className="text text_type_digits-default">{ingredientData.carbohydrates}</p>
                </li>
            </ul>
        </>
    )
}

export default IngredientDetails;