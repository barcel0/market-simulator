import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './PositionItem.css';

class PositionItem extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="PositionRow">
                <div className="PositionData">{this.props.name}</div>
                <div className="PositionData">{this.props.ticker}</div>
                <div className="PositionData">{this.props.amount}</div>
                <div className="PositionData">{this.props.price}</div>
                <div className="PositionData">{this.props.cost}</div>
                <div className="PositionData">{this.props.value}</div>
                <div className="PositionData">{this.props.profit}</div>
            </div>
        );
    }
}

export default PositionItem;

PositionItem.propTypes = {
    name: PropTypes.string,
    ticker: PropTypes.string,
    amount: PropTypes.number,
    price: PropTypes.number,
    cost: PropTypes.number,
    value: PropTypes.number
}