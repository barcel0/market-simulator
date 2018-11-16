import React, {Component} from 'react';
import CompanyItem from './CompanyItem';
import './Companies.css';

class Companies extends Component{
    render(){
        return(
            <div className="companies-container">
                <h2>Companies</h2>
                {this.props.companies.map((company, i) =>
                    <div className="company-container">
                        <CompanyItem
                        key={i}
                        buyCompany={this.props.buyCompany}
                        {...company}
                        // name={company.name} 
                        // ticker={company.ticker} 
                        // rate={company.rate} 
                        // variation={company.variation}
                        // id={company.id}
                        />
                    </div>
                )}
            </div>
        );
    }
}
export default Companies;