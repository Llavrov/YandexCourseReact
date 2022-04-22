import React from 'react';
import {ConstructorElement, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import BasketItem from "./BasketItem";
import componentStyle from './BurgerConstructor.module.css';
import OrderDetails from "../modal/OrderDetails";
// import {TypesData} from "../../utils/types";
// import PropTypes from "prop-types";
import Modal from "../modal/Modal";
import {BurgerContext} from "../context/burgerContext";
import {CounterPriceReducer} from "./handleReducePrice";

function BurgerConstructor() {
    const [isClosedPopup, setClosedPopup] = React.useState(true);
    const {data, setData, setOrderInfo} = React.useContext(BurgerContext);
    const initialState = {data: data, count: 0};
    function init(initialData, initialCount) {
        return {data: data, count: initialCount};
    }
    const [finalCost, dispatchFinalCost] = React.useReducer(CounterPriceReducer, initialState, init);
    let upperBun = data.find(item => item.type === 'bun');

    React.useEffect(() => {
        upperBun = data.find(item => item.type === 'bun');
        dispatchFinalCost({ type: "COUNT" });
    },[data]);

    function handleGetOrderInfo() {
        console.log( data.map(item => item = item._id));
        fetch('https://norma.nomoreparties.space/api/orders', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                "ingredients": ["609646e4dc916e00276b286e","609646e4dc916e00276b2870"]
            })
        })
            .then(result => {
                if (result.ok) return result.json();
                return Promise.reject(`Ошибка ${result.status}`);
            })
            .then(res => console.log(res));
    }

    function handleButtonOrder() {
        setData([
            ...data.filter(item => item.type == 'bun' && item.name !== 'Краторная булка N-200i'),
            ...data.filter(item => item.type !== 'bun')
            ]);
        handleGetOrderInfo();
        setClosedPopup(!isClosedPopup);
    }

    return (
        <div className={componentStyle.container}>
            {!isClosedPopup &&
            <Modal onClose={setClosedPopup} header={''}>
                <OrderDetails></OrderDetails>
            </Modal>}
            <div className={`pt-25 pb-10 ${componentStyle.componentsOfBurger}`} >
                <div className={'pl-8'}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${upperBun.name} (верх)`}
                        price={upperBun.price}
                        thumbnail={upperBun.image}
                    />
                </div>
                <section className={`${componentStyle.component} pr-4`}>
                    {
                        data.filter(i => i.type === 'main').map((i, index) => {
                            return (<BasketItem key={`${i._id}`} name={i.name} thumbnail={i.image} price={i.price} />)
                        })

                    }
                </section>
                <div className={'pl-8'}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${upperBun.name} (низ)`}
                        price={upperBun.price}
                        thumbnail={upperBun.image}
                    />
                </div>
            </div>
            <div className={componentStyle.footerConstructor}>
                <p className="text text_type_digits-medium pr-10">
                    {finalCost.count}<CurrencyIcon type="primary" />
                </p>
                <Button type="primary" size="large" onClick={handleButtonOrder}>
                    Нажми на меня
                </Button>
            </div>
        </div>
    )
}

// BurgerConstructor.propTypes = {
//     data: PropTypes.arrayOf(TypesData).isRequired,
// };


export default BurgerConstructor;