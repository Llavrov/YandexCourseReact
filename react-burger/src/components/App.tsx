import React from 'react';
import Header from "./header/header";
import AppStyle from './App.module.css';
import BurgerIngridients from "./ingridients/burgerIngridients";
import BurgerComponents from "./burgerComponents/burgerComponents";
import data from "../utils/data";


function App() {
  return (
    <div className={AppStyle.App}>
      <Header></Header>

        <div className={AppStyle.burger}>
            <BurgerIngridients data={data}></BurgerIngridients>
            <BurgerComponents data={data}></BurgerComponents>
        </div>
    </div>
  );
}

export default App;
