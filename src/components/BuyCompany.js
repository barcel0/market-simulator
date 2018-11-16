import React, {Component} from 'react';
import NumericInput from 'react-numeric-input';
import './BuyCompany.css';
// test
class BuyCompany extends Component {
    constructor(){
        super();
        this.state = {
            amount: 1
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(valueAsNumber){
        this.setState({amount: valueAsNumber});
    }

    handleSubmit(e){
        e.preventDefault();
        const newAmount = this.state.amount;
        this.props.buyCompany(newAmount, this.props.id);
    }
    
    render(){
        return(
            <div className="buy-form">
            <form onSubmit={this.handleSubmit}>
                <NumericInput
                    min={1}
                    max={9999}
                    step={1} 
                    precision={0}
                    onChange={this.handleChange}
                />
                <input type="submit" value="BUY" />
            </form>
        </div>
        )
    }
}

export default BuyCompany;