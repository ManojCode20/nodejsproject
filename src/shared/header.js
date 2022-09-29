import React, { Component } from 'react';
import Img from '../assets/burger-logo.png';

class Header extends Component {
    constructor() {
        super();
        this.resetOrder = this.resetOrder.bind(this);
    }

    resetOrder() {
        window.location.reload();
    }

    render() {
        var logo = { width: 65 };
        var logoOuter = { padding: 5, borderRadius: 5 };
        return (
            <div className="container-fluid">
                <div className="row p-3 mb-2 header bgcolor text-white text-uppercase">
                    <div className="col-3">
                        <span className="logo" style={logoOuter}><img alt="Burger" style={logo} src={Img} /></span>
                    </div>
                    <div className="col-6">
                        <h2 className="d-flex justify-content-center pt-1">Burger Builder</h2>
                    </div>
                    <div className="col-3">
                        <button type="button" onClick={this.resetOrder} className="btn btn-outline-light float-right mt-2">Reset</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default Header;
