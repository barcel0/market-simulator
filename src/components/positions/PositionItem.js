import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SellCompany from './SellCompany';

import './PositionItem.css';

class PositionItem extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="table-row">
                <div className="table-col company-data">{this.props.name}</div>
                <div className="table-col company-data">{this.props.amount}</div>
                <div className="table-col company-data">{this.props.price}</div>
                <div className="table-col company-data">{this.props.cost}€</div>
                <div className="table-col company-data">{this.props.value}€</div>
                <div className="table-col company-data green">{this.props.profit}€</div>
                <SellCompany 
                    sellCompany = {this.props.sellCompany}
                    positionId = {this.props.positionId}
                />
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