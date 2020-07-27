import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BuyCompany from './BuyCompany';
import Chart from './Chart';
import './CompanyItem.css';

class CompanyItem extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="company">
                <Chart rate={this.props.rate} />
                <div className="company-data-container">
                    <div className="company-data-row">
                        <span className="data">Name</span><span className="company-name">{this.props.name}</span>
                    </div>
                    <div className="company-data-row">
                        <span className="data">Ticker</span><span className="company-name">{this.props.ticker}</span>
                    </div>
                    <div className="company-data-row">
                        <span className="data">Rate</span>
                        <span className="company-rate">
                            {this.props.rate} (<span className={this.props.variation >= 0 ? 'green' : 'red'}>{this.props.variation}%</span>)
                            </span>
                    </div>
                    <BuyCompany
                        id={this.props.id}
                        rate={this.props.rate}
                        buyCompany={this.props.buyCompany}
                    />
                </div>
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