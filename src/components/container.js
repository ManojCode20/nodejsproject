import React, { Component } from 'react';
import Burger from './burger';
import ButtonsCtrl from './buttonsCtrl';
import Modal from './modal';

class Container extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                { label: 'Salad', class: 'salad', rate: 2, count: 0, type:'veg', disabled: true },
                { label: 'Bacon', class: 'bacon', rate: 3, count: 0, type:'nonVeg', disabled: true },
                { label: 'Cheese', class: 'cheese', rate: 5, count: 0, type:'veg', disabled: true },
                { label: 'Meat', class: 'meat', rate: 10, count: 0, type:'nonVeg', disabled: true }
            ],
            defaultPrice: 10
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    //Add Item in burger
    increment(flag) {
        const clone = this.state.items; //Create clone to add item
        var updatePrice = null;
        const addedItem = clone.map(d => {
            if (d.class === flag) {
                d.disabled = false;
                d.count++;
                updatePrice = this.state.defaultPrice + d.rate;
            }
            return d;
        });
        this.setState({ items: addedItem, defaultPrice : updatePrice }); //Replace the state item with clone items and price
    }

    //Remove Item in burger
    decrement(flag) {
        const clone = this.state.items; //Create clone to remove item
        var updatePrice = null;
        const removeItem = clone.map(d => {
            if (d.class === flag) {
                if (d.count > 0) {
                    d.disabled = false;
                    d.count--;
                    updatePrice = this.state.defaultPrice - d.rate;
                }
                if (d.count === 0) {
                    d.disabled = true;
                }
            }
            return d;
        });
        this.setState({ items: removeItem, defaultPrice : updatePrice }); //Replace the state item with clone items and price
    }

    render() {
        return (
            <div className="col-12">
                <div className="row">
                    <div className="col-6 pr-5 border-right border-primary">
                        {/* Burger UI */}
                        <Burger items={this.state.items} price={this.state.defaultPrice} />
                    </div>
                    <div className="col-6 justify-content-md-center pl-5">
                        {/* Burger Buttons to add and remove Ingriendients */}
                        <ButtonsCtrl add={this.increment} remove={this.decrement} price={this.state.defaultPrice} items={this.state.items} />
                        {/* Modal window for confirmation and order place action */}
                        <Modal items={this.state.items} price={this.state.defaultPrice} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;
