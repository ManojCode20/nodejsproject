import React, { Component } from 'react';
import Buttons from './buttons';

class ButtonsCtrl extends Component{
  render() {
    const buttonItems = this.props.items;

    return (
      <div className="row pl-4">
        <div className="col-12 text-left mt-4">
          {/* Burger Price */}
            <h3 className="text-dark border-bottom mb-4 pb-2">Current Price : <strong>₹{this.props.price+ '.00'}</strong></h3>
        </div>
        {/* Burger Buttons */}
        {buttonItems.map((d, i) => (
            <Buttons key={i} className={d.class} label={d.label} count={d.count} added={() =>this.props.add(d.class)} removed={() =>this.props.remove(d.class)} disabledAttr={d.disabled} rate={d.rate} category={d.type} />
          ))
        }
      </div>
    );
  }
}

export default ButtonsCtrl;
