import React, {Component} from 'react';
import './SellCompany.css';

class SellCompany extends Component {
    constructor(){
        super();
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e){
        e.preventDefault();
        this.props.sellCompany(this.props.positionId);
    }
    
    render(){
        return(
            <div className="sell-form">
                <button onClick={this.handleClick}>SELL</button>
        </div>
        )
    }
}

export default SellCompany;