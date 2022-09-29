import React, { Component } from 'react';
import Ingridients from './Ingridients';

class Burger extends Component {

  render() {
    const ingrientsItems = this.props.items;

    return (
      <div className="pr-5 pt-3">
        <span className="upper-part">
          <span className="firstdot"></span>
          <span className="seconddot"></span>
          <span className="thirddot"></span>
          <span className="fourthdot"></span>
          <span className="fifthdot"></span>
        </span>

        {(() => {
          if (this.props.price === 10) {
            return (
              <span className="d-flex justify-content-center w-100 p-3 btn-warning text-dark blank-state">Please start adding ingridients!   </span>
            )
          } else {
            return (
              ingrientsItems.map((d, i) => (
                <Ingridients key={i} className={d.class} ingr={d.count} />
              ))
            )
          }
        })()}
        <span className="bottom-part"></span>
      </div>
    );
  }
}

export default Burger;
