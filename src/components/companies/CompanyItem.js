import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BuyCompany from './BuyCompany';
import './CompanyItem.css';

class CompanyItem extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render() {
        return (          
            <div className="company-row">
                <div className="company-data">{this.props.name}</div>
                <div className="company-data">{this.props.ticker}</div>          
                <div className="company-data">{this.props.rate}</div>
                <div className="company-data">{this.props.variation}%</div>
                <BuyCompany 
                    id = {this.props.id}
                    buyCompany = {this.props.buyCompany}
                />
            </div>
        );
    }
}

export default CompanyItem;

CompanyItem.propTypes = {
    name: PropTypes.string,
    ticker: PropTypes.string,
    rate: PropTypes.number,
    variation: PropTypes.number
};