import React from 'react';
import inStyle from './burgerIngridients.module.css';
import TabBurger from "./tabBurger";
import ItemBlock from "./itemBlock";
import IngridientDetails from "../modal/IngridientDetails";
import Modal from "../modal/Modal";
import {BurgerContext} from "../context/burgerContext";
// import {TypesData} from "../../utils/types";
// import PropTypes from "prop-types";

function BurgerIngredients() {
    const [info, setInfo] = React.useState(null);
    const [isClose, setClose] = React.useState(true);
    const {data} = React.useContext(BurgerContext);
    return (
        <div className={`${inStyle.cards} mr-10`}>
            {!isClose &&
            <Modal onClose={setClose} header={'Детали заказа'}  classModal={'mt-10'}>
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

// BurgerIngredients.propTypes = {
//     data: PropTypes.arrayOf(TypesData).isRequired,
// };

export default BurgerIngredients;