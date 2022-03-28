import React from 'react';
import {ConstructorElement, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import BacketItem from "./BacketItem";
import componentStyle from './burgerComponents.module.css';
import PropTypes from "prop-types";
import OrderDetails from "../modal/OrderDetails";

function BurgerComponents({data, }) {
    const [isClosedPopup, setClosedPopup] = React.useState(true);

    return (
        <div className={componentStyle.container}>
            {!isClosedPopup && <OrderDetails setClose={setClosedPopup}></OrderDetails>}
            <div className={`pt-25 pb-10 ${componentStyle.componentsOfBurger}`} style={{ display: 'flex', flexDirection: 'column', gap: '10px',
            justifyContent: "right"}}>
                <div className={'pl-8'}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={data[0].image}
                    />
                </div>
                <section className={`${componentStyle.component} pr-4`}
                         style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    {
                        data.filter(i => i.type === 'main').map((i, index) => {
                            return (<BacketItem key={`${index}-${i.type}`}thumbnail={i.image} price={i.price} />)
                        })

                    }
                </section>
                <div className={'pl-8'}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={data[0].image}
                    />
                </div>
            </div>
            <div style={{float: "right", display: "flex", alignItems: 'center'}}>
                <p className="text text_type_digits-medium pr-10">
                    {data.filter(i => i.type === 'main').reduce((sum, cur) => sum + cur.price, 0)}<CurrencyIcon type="primary" /></p>
                <Button type="primary" size="large" onClick={() => setClosedPopup(!isClosedPopup)}>
                    Нажми на меня
                </Button>
            </div>
        </div>
    )
}

BurgerComponents.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            name: PropTypes.string,
            type: PropTypes.string,
            proteins: PropTypes.number,
            fat: PropTypes.number,
            carbohydrates: PropTypes.number,
            calories: PropTypes.number,
            price: PropTypes.number,
            image: PropTypes.string,
            image_mobile: PropTypes.string,
            image_large: PropTypes.string,
            __v: PropTypes.number,
        })
    )
}


export default BurgerComponents;