import React from 'react';
import inStyle from './burgerIngridients.module.css';
import TabBurger from "./tabBurger";
import ItemBlock from "./itemBlock";
import PropTypes from "prop-types";
function BurgerIngridients({data}) {

    return (
        <div className={`${inStyle.cards} mr-10`}>
            <p className="text text_type_main-large pb-5 pt-10">
                Соберите бургер
            </p>
            <TabBurger></TabBurger>
            <div  className={`${inStyle.burgers} pt-10`}>
                <p className="pb-6 text text_type_main-medium">Булки</p>
                <div className={inStyle.rolls}>
                    {
                        data.filter(i => i.type === 'bun').map((i, index) => {
                            return (<ItemBlock key={`${index}-${i.type}`} image={i.image} name={i.name} price={i.price}/>)
                        })
                    }
                </div>
                <p className="pb-6 pt-10 text text_type_main-medium">Соусы</p>
                <div className={inStyle.rolls}>
                    {
                        data.filter(i => i.type === 'sauce').map((i, index) => {
                            return (<ItemBlock key={`${index}-${i.type}`} image={i.image} name={i.name} price={i.price}/>)
                        })
                    }
                </div>
                <p className="pb-6 pt-10 text text_type_main-medium">Начинка</p>
                <div className={inStyle.rolls}>
                    {
                        data.filter(i => i.type === 'main').map((i, index) => {
                            return (<ItemBlock key={`${index}-${i.type}`} image={i.image} name={i.name} price={i.price}/>)
                        })
                    }
                </div>
            </div>
        </div>
    )

}

BurgerIngridients.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number,
}


export default BurgerIngridients;

