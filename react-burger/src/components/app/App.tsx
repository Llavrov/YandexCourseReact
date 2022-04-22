import React from 'react';
import Header from "../header/header";
import AppStyle from './App.module.css';
import BurgerIngredients from "../ingridients/burgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {URL, itemData} from "../../utils/data";
import {BurgerContext} from "../context/burgerContext";


function App() {
    const [data, setData] = React.useState([]);
    const [orderInfo, setOrderInfo] = React.useState({});

    React.useEffect(() => {
        fetch(`${URL}ingredients`)
            .then(result => {
                if (result.ok) return result.json();
                return Promise.reject(`Ошибка ${result.status}`);
            })
            .then((result) =>  setData(result.data))
            .catch(e => console.log(e));
    },[]);

    return !!data.length ?
        (<BurgerContext.Provider value={{
            data: data,
            setData: setData,
            orderInfo: orderInfo,
            setOrderInfo: setOrderInfo
        }}>
            <div className={AppStyle.App}>
                <Header />
                <div className={AppStyle.burger}>
                    <BurgerIngredients></BurgerIngredients>
                    <BurgerConstructor></BurgerConstructor>
                </div>
            </div>
        </BurgerContext.Provider>)
        : <></>
}



export default App;