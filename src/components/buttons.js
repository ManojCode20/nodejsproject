import React, { Component } from 'react';

class Ingrients extends Component {
    constructor(props) {
        super();
    }

    render() {
        let checkIng = null;
        let colorIng = null;

        switch( this.props.category ){
            case ('veg'):
                checkIng = 'veg';
                break;
            case ('nonVeg'):
                checkIng = 'non-veg';
                break;
            default:
                checkIng = null;
        }

        switch( this.props.className ){
            case ('salad'):
                colorIng = 'text-success';
                break;
            case ('bacon'):
                colorIng = 'text-danger';
                break;
            case ('cheese'):
                colorIng = 'text-warning';
                break;
            case ('meat'):
                colorIng = 'text-success';
                break;

            default:
                colorIng = null;

        }
        return (
            <div className="col-12 mb-2">
                <span className="float-left w-50"><span className={'icon-n ' + checkIng}/> <h4 className={colorIng}>{this.props.label} <small className="text-dark font-italic"> (₹{this.props.rate} <i> {this.props.count ? "x " + this.props.count : ''}</i>)</small> <span className="float-right">:</span> </h4> </span> <div className="float-right w-50"><button type="button" className="btn btn-primary float-right addbtn" title="Add" onClick={this.props.added} >
                    <svg className="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                        <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                    </svg></button> <button disabled={this.props.disabledAttr} type="button" className="btn btn-secondary float-right mr-2 addbtn" title="Remove" onClick={this.props.removed} ><svg className="bi bi-dash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z" />
                    </svg></button></div>
            </div>
        );
    }
}

export default Ingrients;
