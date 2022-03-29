import React from 'react';
import inStyle from './burgerIngridients.module.css';
import TabBurger from "./tabBurger";
import ItemBlock from "./itemBlock";
import PropTypes from "prop-types";
import IngridientDetails from "../modal/IngridientDetails";
import Modal from "../modal/Modal";

function BurgerIngridients({data}) {
    const [info, setInfo] = React.useState(null);
    const [isClose, setClose] = React.useState(true);
    return (
        <div className={`${inStyle.cards} mr-10`}>
            {!isClose &&
            <Modal onClose={setClose} header={'Детали заказа'}  classModal={'pt-10'}>
                <IngridientDetails {...info}></IngridientDetails>
            </Modal>}
            <p className="text text_type_main-large pb-5 pt-10">
                Соберите бургер
            </p>
            <TabBurger></TabBurger>
            <div  className={`${inStyle.burgers} pt-10`}>
                <p className="pb-6 text text_type_main-medium">Булки</p>
                <div className={inStyle.rolls}>
                    {
                        data.filter(i => i.type === 'bun').map((item, index) => {
                            return (<ItemBlock setInfo={setInfo} setClose={setClose} {...item} key={`${item._id}`}/>)
                        })
                    }
                </div>
                <p className="pb-6 pt-10 text text_type_main-medium">Соусы</p>
                <div className={inStyle.rolls}>
                    {
                        data.filter(i => i.type === 'sauce').map((item, index) => {
                            return (<ItemBlock setInfo={setInfo} setClose={setClose} {...item} key={`${item._id}`}/>)
                        })
                    }
                </div>
                <p className="pb-6 pt-10 text text_type_main-medium">Начинка</p>
                <div className={inStyle.rolls}>
                    {
                        data.filter(i => i.type === 'main').map((item, index) => {
                            return (<ItemBlock setInfo={setInfo} setClose={setClose} {...item} key={`${item._id}`}/>)
                        })
                    }
                </div>
            </div>
        </div>
    )

}

BurgerIngridients.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
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
        })
    )
}

export default BurgerIngridients;

