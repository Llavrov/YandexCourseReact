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
import {checkUserAuth} from "../../redux/actions/user";


function App() {
    const dispatch = useDispatch();
    const burgersData = useSelector((store: RootState) => {
        return store.burger.burgersData;
    });

    React.useEffect(() => {
        dispatch(checkUserAuth());
        dispatch(fetchBurgerData('ingredients'))
    },[]);

    return (
        <div className={AppStyle.App}>
            <Header />
            <Switch>
                <ProtectedRoute path={'/'} exact={true}>
                    {!!burgersData.length
                        ? (
                            <div className={AppStyle.burger}>
                                <BurgerIngredients></BurgerIngredients>
                                <BurgerConstructor></BurgerConstructor>
                            </div>
                        ) : (
                            <></>
                        )}
                </ProtectedRoute>
                <ProtectedRoute onlyUnAuth={true} path={'/login'} exact={true}>
                    <Login></Login>
                </ProtectedRoute>
                <ProtectedRoute onlyUnAuth={true} path={'/register'} exact={true}>
                    <Register></Register>
                </ProtectedRoute>
                <ProtectedRoute onlyUnAuth={true} path={'/forgot-password'} exact={true}>

                </ProtectedRoute>
                <ProtectedRoute onlyUnAuth={true} path={'/reset-password'} exact={true}>

                </ProtectedRoute>
                <ProtectedRoute path={'/profile'} exact={true}>

                </ProtectedRoute>
                <ProtectedRoute path={'/ingredients/:id'} exact={true}>

                </ProtectedRoute>
                <Route path={'/'}>

                </Route>
            </Switch>
        </div>
    )
}

export default App;