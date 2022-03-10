import React from 'react';
import {ListIcon, Logo, ProfileIcon, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import inStyle from './burgerIngridients.module.css';
import TabBurger from "./tabBurger";
import getData from '../../utils/data';
import ItemBlock from "./itemBlock";
class BurgerIngridients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {current: 'one'};
        this.setCurrent = this.setCurrent.bind(this);
        this.current = 'one'
        this.data = getData();
    }

    setCurrent(cur) {
        this.setState({
            current: cur
        })
    }

    render () {
        return (
            <div className={inStyle.cards}>
                <p className="text text_type_main-large pb-5 pt-10">
                    Соберите бургер
                </p>
                {/*<TabBurger></TabBurger>*/}
                <div  className={inStyle.burgers}>
                    <p className="pb-6 text text_type_main-medium">Булки</p>
                    <div className={inStyle.rolls}>
                        <ItemBlock image={this.data[0].image} name={this.data[0].name}></ItemBlock>
                        <ItemBlock image={this.data[0].image} name={this.data[0].name}></ItemBlock>
                    </div>
                    <p className="pb-6 pt-10 text text_type_main-medium">Соусы</p>
                    <div className={inStyle.rolls}>
                        {
                            [0,1,2,3].map(i => {
                                 return (<ItemBlock image={this.data[i].image} name={this.data[i].name}></ItemBlock>)
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default BurgerIngridients;