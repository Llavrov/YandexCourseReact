import React from 'react';
import Header from "../header/header";
import AppStyle from './App.module.css';
import BurgerIngredients from "../ingredients/burgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {fetchBurgerData} from "../../redux/actions/burgers";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../index";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import Login from "../../pages/login/login";
import ProtectedRoute from "../protectedRoute/protectedRoute";
import Register from "../../pages/register/register";
import {checkUserAuth} from "../../redux/actions/user";
import ResetPassword from "../../pages/reset-password/reset-password";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import Profile from "../../pages/profile/profile";
import IngredientDetails from "../modal/IngredientDetails";
import Modal from "../modal/Modal";


function App() {
    const dispatch = useDispatch();
    const burgersData = useSelector((store: RootState) => {return store.burger.burgersData});
    const location = useLocation();
    const history = useHistory();

    // @ts-ignore
    const background = location.state && location.state.background;

    const handleModalClose = () => history.goBack();

    React.useEffect(() => {
        dispatch(checkUserAuth());
        dispatch(fetchBurgerData('ingredients'))
    },[dispatch]);

    return (
        <div className={AppStyle.App}>
            <Header />
            <Switch location={background || location}>
                <ProtectedRoute UnAuth={true} path={'/YandexCourseReact/'} exact={true}>
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
                <ProtectedRoute onlyUnAuth={true} path={'/YandexCourseReact/login'} exact={true}>
                    <Login></Login>
                </ProtectedRoute>
                <ProtectedRoute onlyUnAuth={true} path={'/YandexCourseReact/register'} exact={true}>
                    <Register></Register>
                </ProtectedRoute>
                <ProtectedRoute onlyUnAuth={true} path={'/YandexCourseReact/forgot-password'} exact={true}>
                    <ForgotPassword></ForgotPassword>
                </ProtectedRoute>
                <ProtectedRoute onlyUnAuth={true} path={'/YandexCourseReact/reset-password'} exact={true}>
                    <ResetPassword></ResetPassword>
                </ProtectedRoute>
                <ProtectedRoute path={'/YandexCourseReact/profile'} exact={true}>
                    <Profile></Profile>
                </ProtectedRoute>
                <Route path={'/YandexCourseReact/ingredients/:id'} exact={true}>
                    <div className={AppStyle.ingredientContainer}>
                        <IngredientDetails></IngredientDetails>
                    </div>
                </Route>
                <Route path={'/'}>
                </Route>
            </Switch>
            {background && (
                <>
                    <Route path={'/YandexCourseReact/ingredients/:id'} exact={true}>
                        <Modal header={'Детали ингредиента'}  classModal={'mt-10'} onClose={handleModalClose}>
                            <IngredientDetails></IngredientDetails>
                        </Modal>
                    </Route>
                </>
            )}
        </div>
    )
}

export default App;