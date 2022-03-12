import React from 'react';
import Header from "./components/header/header";
import './App.css';
import BurgerIngridients from "./components/ingridients/burgerIngridients";
import BurgerComponents from "./components/burgerComponents/burgerComponents";

function App() {
  return (
    <div className="App">
      <Header></Header>

        <div className={'burger'}>
            <BurgerIngridients></BurgerIngridients>
            <BurgerComponents></BurgerComponents>
        </div>
    </div>
  );
}

export default App;
