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
import {useHistory} from "react-router-dom";
import {objectBurger} from "../../utils/types";
import {RootState} from "../../index";

function BurgerConstructor() {
    const dispatch = useDispatch();
    const {constructorBun, constructorData, constructorFinalCoast}: {constructorBun: objectBurger & {isEmpty: boolean}, constructorData: Array<objectBurger & {index_id: string}> , constructorFinalCoast: number} = useSelector((store: RootState) => store.constructorBurger);
    const {orderData: orderDetails} = useSelector((store: RootState) => store.order);
    const {success: orderSuccess } = useSelector((store: RootState) => store.order.orderData);
    const { getUser } = useSelector((store: RootState) => store.user)
    const history = useHistory();

    function handleSetComponentById(props: objectBurger) {
        return {...props, index_id: `${uuidv4()}`}
    }

    const moveCard = React.useCallback((dragIndex: number, hoverIndex: number) => {
        const dragCard = constructorData[dragIndex];
        const newCards = [...constructorData]
        newCards.splice(dragIndex, 1)
        newCards.splice(hoverIndex, 0, dragCard)
        dispatch({
            type: UPDATE_CONSTRUCTOR_LIST,
            constructorData: newCards,
        })
    }, [constructorData, dispatch]);

// **
// * useDropTarget Hook
//     * @param spec The drop target specification (object or function, function preferred)
// * @param deps The memoization deps array to use when evaluating spec changes
//     */
//     export function useDrop<
//         DragObject = unknown,
//         DropResult = unknown,
//         CollectedProps = unknown,
//         >(

    const [{isHover}, drop] = useDrop({
        accept: 'Ingredient',
        drop(propsItem: objectBurger) {
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
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })
    });

    function handleButtonOrder() {
        let orders = [...constructorData.map((item: any) => item = item._id), constructorBun._id];
        if (getUser()) {
            dispatch(fetchOrderInfo('orders', orders));
        } else {
            history.push('/YandexCourseReact/login');
        }
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
                        constructorData.map((i: objectBurger & {index_id: string}, index: number) => {
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
                {/*// @ts-ignore*/}
                <Button type="primary" size="large" onClick={handleButtonOrder}>
                    Оформить заказ
                </Button>
            </div>
        </div>
    )
}

export default BurgerConstructor;