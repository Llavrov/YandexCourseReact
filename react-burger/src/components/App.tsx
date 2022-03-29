import React from 'react';
import Header from "./header/header";
import AppStyle from './App.module.css';
import BurgerIngridients from "./ingridients/burgerIngridients";
import BurgerConstructor from "./BurgerConstructor/BurgerConstructor";
import {URL, itemData} from "../utils/data";


function App() {
    const [data, setData] = React.useState(itemData);
    React.useEffect(() => {
       fetch(URL)
           .then(result => {
               try {
                   return result.json()
               } catch (e){
                   console.log(e)
               }
           })
           .then((result) =>  setData(result.data))
           .catch(e => console.log(e));
    },[]);

  return data && (
    <div className={AppStyle.App}>
      <Header></Header>
        <div className={AppStyle.burger}>
            <BurgerIngridients data={data} ></BurgerIngridients>
            <BurgerConstructor data={data}></BurgerConstructor>
        </div>
    </div>
  );
}



export default App;
