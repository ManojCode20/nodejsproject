import React, { Component } from 'react';

class Ingridients extends Component {
    constructor(props) {
        super();
    }

    render() {
        const ingItems = this.props.ingr;
        var rows = [];
        for (var i = 1; i <= ingItems; i++) {
            rows.push(<span className={this.props.className}></span>)
        }
        return (
            <div>
                {rows.map((d, i) => (
                <span key={i} >
                    {d}
                </span>
            ))}
            </div>
        )
    }
}

export default Ingridients;
