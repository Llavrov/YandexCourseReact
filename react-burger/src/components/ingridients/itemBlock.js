import React from "react";
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import itemStyle from './itemBlock.module.css';

class ItemBlock extends React.Component {
    constructor({image, price, name, count}) {
        super();
        this.image = image ||"https://code.s3.yandex.net/react/code/bun-02.png";
        this.price = price || 20;
        this.name = name || "lion";
        this.count = 0;
    }

    render() {
        return (
            <div className={`${itemStyle.container} ml-4`}>
                <img className={`${itemStyle.image} pr-4 pl-4`} src={this.image} alt={this.image}/>
                <span style={{display: 'inline-flex', alignItems: "center", justifyContent: "flex-end"}}
                      className="pt-1 pb-1 text text_type_digits-default">{this.price} <CurrencyIcon type="primary" /></span>
                <p style={{maxWidth: "272px", textAlign: 'center'}}className="pb-8 text text_type_main-default">
                    {this.name}
                </p>
            </div>
        )
    }
}

export default ItemBlock;