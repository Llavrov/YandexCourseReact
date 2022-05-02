import React from 'react';
import Header from "../header/header";
import AppStyle from './App.module.css';
import BurgerIngredients from "../ingredients/burgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {fetchBurgerData} from "../../redux/actions/burgers";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../index";


function App() {
    const dispatch = useDispatch();
    const data = useSelector((store: RootState) => {
        return store.burger.burgersData;
    });

    React.useEffect(() => {
        dispatch(fetchBurgerData('ingredients'))
    },[]);

    return !!data.length ?
        (<div className={AppStyle.App}>
            <Header />
            <div className={AppStyle.burger}>
                <BurgerIngredients></BurgerIngredients>
                <BurgerConstructor></BurgerConstructor>
            </div>
        </div>)
        : <></>
}

export default App;