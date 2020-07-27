import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import './BuyCompany.css';

class BuyCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(valueAsNumber) {
        this.setState({ amount: valueAsNumber });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newAmount = this.state.amount;
        if (newAmount <= 0) {
            alert('You have to buy at least 1 stock!')
        } else {
            this.props.buyCompany(newAmount, this.props.id);
            this.setState({ amount: 1, typedAmount: 1 });
        }
    }

    render() {
        return (
            <div>
                <form className="buy-form" onSubmit={this.handleSubmit}>
                    <NumericInput
                        min={1}
                        max={9999}
                        value={this.state.amount}
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
                        value={`BUY (£${(this.props.rate * this.state.amount).toFixed(2)})`}
                        className="buy-button" />
                </form>
            </div>
        )
    }
}

export default BuyCompany;