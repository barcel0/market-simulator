import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CompanyItem.css';

class CompanyItem extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render() {
        return (          
            <div className="CompanyRow">
                <div className="CompanyData">{this.props.name}</div>
                <div className="CompanyData">{this.props.ticker}</div>          
                <div className="CompanyData">{this.props.rate}</div>
                <div className="CompanyData">{this.props.variation}%</div>
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