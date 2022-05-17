import React from 'react';
import inStyle from './burgerIngridients.module.css';
import TabBurger from "./tabBurger";
import ItemBlock from "./itemBlock";
import {useSelector} from "react-redux";

function BurgerIngredients() {
    // const dispatch = useDispatch();
    // const modalOpen = useSelector(store => store.ingredient.modalOpen);
    const data = useSelector(store => store.burger.burgersData);
    const [current, setCurrent] = React.useState('Булки')

    function handleScrollTab(target) {
        const item = [
            [Math.abs(target.currentTarget.querySelector('#main').getClientRects()[0].top), 'Начинка'],
            [Math.abs(target.currentTarget.querySelector('#Souse').getClientRects()[0].top), 'Соусы'],
            [Math.abs(target.currentTarget.querySelector('#Bun').getClientRects()[0].top), 'Булки']
        ].sort((a,b) => a[0] - b[0])
        setCurrent(String(item[0][1]))
    }

    return (
        <div className={`${inStyle.cards} mr-10`}>
            <p className="text text_type_main-large pb-5 pt-10">
                Соберите бургер
            </p>
            <TabBurger current={current} setCurrent={setCurrent}></TabBurger>
            {React.useMemo(() =>
                <div onScroll={handleScrollTab} className={`${inStyle.burgers} pt-10`}>
                <p id="Bun" className="pb-6 text text_type_main-medium">Булки</p>
                <div className={inStyle.rolls}>
                    {
                        data.filter(i => i.type === 'bun').map((item, index) => {
                            return (<ItemBlock {...item} key={`${item._id}`} />)
                        })
                    }
                </div>
                <p id="Souse" className="pb-6 pt-10 text text_type_main-medium">Соусы</p>
                <div className={inStyle.rolls}>
                    {
                        data.filter(i => i.type === 'sauce').map((item, index) => {
                            return (<ItemBlock {...item} key={`${item._id}`}/>)
                        })
                    }
                </div>
                <p id="main" className="pb-6 pt-10 text text_type_main-medium">Начинка</p>
                <div className={inStyle.rolls}>
                    {
                        data.filter(i => i.type === 'main').map((item, index) => {
                            return (<ItemBlock {...item} key={`${item._id}`}/>)
                        })
                    }
                </div>
            </div>)
            }
        </div>
    )

}

// BurgerIngredients.propTypes = {
//     data: PropTypes.arrayOf(TypesData).isRequired,
// };

export default BurgerIngredients;
