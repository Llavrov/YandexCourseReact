import React from 'react';
import Header from "./header/header";
import AppStyle from './App.module.css';
import BurgerIngridients from "./ingridients/burgerIngridients";
import BurgerComponents from "./burgerComponents/burgerComponents";
import {URL} from "../utils/data";
import OrderDetails from "./modal/OrderDetails";


function App() {
    let [isData, setData] = React.useState(null);
    React.useEffect(() => {
       fetch(URL)
           .then(result => result.json())
           .then((result) =>  setData(result.data))
           .catch(e => console.log(e));
    },[]);

  return isData && (
    <div className={AppStyle.App}>
      <Header></Header>
        <div className={AppStyle.burger}>
            <BurgerIngridients data={isData} ></BurgerIngridients>
            <BurgerComponents data={isData}></BurgerComponents>
        </div>
    </div>
  );
}



export default App;
