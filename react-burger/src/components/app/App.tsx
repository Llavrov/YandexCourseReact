import React from 'react';
import Header from "../header/header";
import AppStyle from './App.module.css';
import BurgerIngredients from "../ingredients/burgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {fetchBurgerData} from "../../redux/actions/burgers";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../index";
import {Route, Switch} from "react-router-dom";
import Login from "../../pages/login/login";
import ProtectedRoute from "../protectedRoute/protectedRoute";
import Register from "../../pages/register/register";


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
            <Switch>
                <ProtectedRoute path={'/'} exact={true}>
                    <div className={AppStyle.burger}>
                        <BurgerIngredients></BurgerIngredients>
                        <BurgerConstructor></BurgerConstructor>
                    </div>
                </ProtectedRoute>
                <Route path={'/login'} exact={true}>
                    <Login></Login>
                </Route>
                <Route path={'/register'} exact={true}>
                    <Register></Register>
                </Route>
                <Route path={'/forgot-password'} exact={true}>

                </Route>
                <Route path={'/reset-password'} exact={true}>

                </Route>
                <ProtectedRoute path={'/profile'} exact={true}>

                </ProtectedRoute>
                <ProtectedRoute path={'/ingredients/:id'} exact={true}>

                </ProtectedRoute>
                <Route path={'/'}>

                </Route>
            </Switch>
        </div>)
        : <></>
}

export default App;