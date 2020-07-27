import React, { Component } from 'react';
import './SellCompany.css';

class SellCompany extends Component {
    constructor() {
        super();
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.sellCompany(this.props.positionId);
    }

    render() {
        return (
            <div className="table-col sell-company" onClick={this.handleClick}>SELL</div>
        )
    }
}

export default SellCompany;