import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid fixed-bottom">
                <div className="row p-3 bgcolor text-white text-uppercase">
                    <div className="col-12 justify-content-center">
                        <span className="d-flex justify-content-center w-100">&copy; Copyright 2020. All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
