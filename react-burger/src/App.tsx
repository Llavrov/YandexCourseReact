import React from 'react';
import Header from "./components/header/header";
import './App.css';
import BurgerIngridients from "./components/ingridients/burgerIngridients";
import getData from "./utils/data";

const data = getData();

function App() {
  return (
    <div className="App">
      <Header></Header>

        <div className={'burger'}>
            <BurgerIngridients></BurgerIngridients>
            <BurgerIngridients></BurgerIngridients>
        </div>
    </div>
  );
}

export default App;
