import React, { Component } from 'react';
import CompanyItem from './CompanyItem';
import './Companies.css';

class Companies extends Component {
    render() {
        return (
            <div className="panel">
                <h2>Market</h2>
                <div className="company-container">
                    {this.props.companies.map((company, i) =>
                        <CompanyItem
                            key={i}
                            buyCompany={this.props.buyCompany}
                            {...company}
                        />
                    )}
                </div>
            </div>
        );
    }
}
export default Companies;