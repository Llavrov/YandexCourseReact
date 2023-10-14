import React, {FC} from 'react';
import inStyle from './burgerIngridients.module.css';
import TabBurger from "./tabBurger";
import ItemBlock from "./itemBlock";
import {useSelector} from "react-redux";
import {objectBurger} from "../../utils/types";
import {RootState} from "../../index";

const BurgerIngredients: FC = () => {
    const data = useSelector((store: RootState) => store.burger.burgersData);
    const [current, setCurrent] = React.useState('Булки');

    function handleScrollTab(target: React.UIEvent<HTMLDivElement>) {
        const item: {cords: number, name: string}[] = [
            // @ts-ignore
            {cords: Math.abs(target.currentTarget.querySelector('#main').getClientRects()[0].top ), name: 'Начинка'},
            // @ts-ignore
            {cords: Math.abs(target.currentTarget.querySelector('#Souse').getClientRects()[0].top), name: 'Соусы'},
            // @ts-ignore
            {cords: Math.abs(target.currentTarget.querySelector('#Bun').getClientRects()[0].top), name: 'Булки'},
        ].sort((a: {cords: number, name: string},b: {cords: number, name: string}) => a.cords - b.cords)
        setCurrent(String(item[0].name))
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
                        data.filter((i: objectBurger) => i.type === 'bun').map((item: objectBurger) => {
                            return (<ItemBlock {...item} key={`${item._id}`}/>)
                        })
                    }
                </div>
                <p id="Souse" className="pb-6 pt-10 text text_type_main-medium">Соусы</p>
                <div className={inStyle.rolls}>
                    {
                        data.filter((i: objectBurger) => i.type === 'sauce').map((item: objectBurger) => {
                            return (<ItemBlock {...item} key={`${item._id}`}/>)
                        })
                    }
                </div>
                <p id="main" className="pb-6 pt-10 text text_type_main-medium">Начинка</p>
                <div className={inStyle.rolls}>
                    {
                        data.filter((i: objectBurger) => i.type === 'main').map((item: objectBurger) => {
                            return (<ItemBlock {...item} key={`${item._id}`}/>)
                        })
                    }
                </div>
            </div>, [])
            }
        </div>
    )

}

export default BurgerIngredients;
