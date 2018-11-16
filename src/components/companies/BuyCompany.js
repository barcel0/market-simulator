import React, {Component} from 'react';
import NumericInput from 'react-numeric-input';
import './BuyCompany.css';

class BuyCompany extends Component {
    constructor(){
        super();
        this.state = {
            amount: 1,
            typedAmount: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    
    handleChange(valueAsNumber){
        const potentialCost = (valueAsNumber * this.props.rate).toFixed(2);
        this.setState({amount: valueAsNumber, typedAmount: potentialCost});
    }

    handleSubmit(e){
        e.preventDefault();
        const newAmount = this.state.amount;
        this.props.buyCompany(newAmount, this.props.id);
    }

    render(){
        return(
            <div>    
                <form className="buy-form" onSubmit={this.handleSubmit}>
                    <NumericInput
                        min={1}
                        max={9999}
                        step={1} 
                        precision={0}
                        style={{
                            input: {
                                fontSize: '1.4em',
                                padding: '15px'
                            }
                        }}
                        onChange={this.handleChange}
                        className="buy-input"
                    />
                    <input 
                    type="submit" 
                    value={`BUY (${this.state.typedAmount}€)`}
                    className="buy-button"/>
                </form>
            </div>
        )
    }
}

export default BuyCompany;