import React from 'react';
import {ConstructorElement, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import BasketItem from "./BasketItem";
import componentStyle from './BurgerConstructor.module.css';
import OrderDetails from "../modal/OrderDetails";
import Modal from "../modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {fetchOrderInfo, SET_ORDER_CLOSE} from "../../redux/actions/order";
import { useDrop } from "react-dnd";
import {ADD_CONSTRUCTOR_ITEM, SET_CONSTRUCTOR_BUN, UPDATE_CONSTRUCTOR_LIST} from "../../redux/actions/constructor";
import { v4 as uuidv4 } from 'uuid';

function BurgerConstructor() {
    const dispatch = useDispatch();
    const {constructorBun, constructorData, constructorFinalCoast} = useSelector(store => store.constructorBurger);
    const {orderData: orderDetails} = useSelector(store => store.order);
    const {success: orderSuccess } = useSelector(store => store.order.orderData);

    function handleSetComponentById(props) {
        return {...props, index_id: `${uuidv4()}`}
    }

    const moveCard = React.useCallback((dragIndex, hoverIndex) => {
        const dragCard = constructorData[dragIndex];
        const newCards = [...constructorData]
        newCards.splice(dragIndex, 1)
        newCards.splice(hoverIndex, 0, dragCard)
        dispatch({
            type: UPDATE_CONSTRUCTOR_LIST,
            constructorData: newCards,
        })
    }, [constructorData, dispatch]);

    const [{ isHover }, drop] = useDrop({
        accept: 'Ingredient',
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),
        drop(propsItem) {
            const itemConstructor = handleSetComponentById(propsItem);
            if (itemConstructor.type === 'bun') {
                dispatch({
                    type: SET_CONSTRUCTOR_BUN,
                    item: itemConstructor,
                })
            } else {
                dispatch({
                    type: ADD_CONSTRUCTOR_ITEM,
                    item: itemConstructor,
                })
            }
        }
    });

    function handleButtonOrder() {
        let orders = [...constructorData.map(item => item = item._id), constructorBun._id];
        console.log(orders);
        dispatch(fetchOrderInfo('orders', orders))
    }

    return (
        <div className={componentStyle.container}>
            {orderSuccess &&
            <Modal header={''} onClose={() => dispatch({type: SET_ORDER_CLOSE})}>
                <OrderDetails orderNumber={orderDetails.order.number}></OrderDetails>
            </Modal>}
            <div ref={drop} className={`pt-25 pb-10 ${componentStyle.componentsOfBurger}`} >
                {constructorBun.isEmpty && !constructorData.length &&
                    <p className={`${componentStyle.emptyText} pt-20 text text_type_main-medium`}>
                        Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа
                    </p>
                }
                {!constructorBun.isEmpty && (<div className={'pl-8'}>
                    <ConstructorElement

                        type="top"
                        isLocked={true}
                        text={`${constructorBun.name} (верх)`}
                        price={constructorBun.price}
                        thumbnail={constructorBun.image}
                    />
                </div>)}
                <section className={`${componentStyle.component} pr-4`}>
                    {
                        constructorData.map((i, index) => {
                            return (<BasketItem moveCard={moveCard} index={index} key={i.index_id} item={{
                                ...i,
                                index: index
                            }} />)
                        })

                    }
                </section>
                {!constructorBun.isEmpty && (<div className={'pl-8'}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${constructorBun.name} (низ)`}
                        price={constructorBun.price}
                        thumbnail={constructorBun.image}
                    />
                </div>)}
            </div>
            <div className={componentStyle.footerConstructor}>
                <p className="text text_type_digits-medium pr-10">
                    {constructorFinalCoast}<CurrencyIcon type="primary" />
                </p>
                <Button type="primary" size="large" onClick={handleButtonOrder}>
                    Оформить заказ
                </Button>
            </div>
        </div>
    )
}

// BurgerConstructor.propTypes = {
//     data: PropTypes.arrayOf(TypesData).isRequired,
// };


export default BurgerConstructor;