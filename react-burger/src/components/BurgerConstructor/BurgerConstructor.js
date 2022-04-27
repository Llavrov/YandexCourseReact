import React from 'react';
import {ConstructorElement, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import BasketItem from "./BasketItem";
import componentStyle from './BurgerConstructor.module.css';
import OrderDetails from "../modal/OrderDetails";
import Modal from "../modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {UPDATE_BURGER_DATA} from "../../redux/actions/burgers";
import {fetchOrderInfo} from "../../redux/actions/order";

function BurgerConstructor() {
    const [isClosedPopup, setClosedPopup] = React.useState(true);
    const data = useSelector(store => store.burger.burgersData);
    const constructorData = useSelector(store => store.constructorBurger.constructorData)
    const constructorFinalCoast = useSelector(store => store.constructorBurger.constructorFinalCoast);

    const dispatch = useDispatch();

    let upperBun = data.find(item => item.type === 'bun');

    function handleButtonOrder() {
        dispatch(fetchOrderInfo('orders', constructorData))
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
                        constructorData.map((i, index) => {
                            return (<BasketItem key={`${index}${i._id}`} item={i} />)
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
                    {constructorFinalCoast}<CurrencyIcon type="primary" />
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