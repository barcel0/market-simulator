import React, {Component} from 'react';
import PositionItem from './PositionItem';
import './Positions.css';

class Positions extends Component{
  render(){
    return(
      <div className="positions-container">
        <h2>Positions</h2>
        <div className="position-container">
          <div className="PositionData">Name</div>
          <div className="PositionData">Ticker</div>
          <div className="PositionData">Amount</div>
          <div className="PositionData">Price</div>
          <div className="PositionData">Cost</div>
          <div className="PositionData">Value</div>
          <div className="PositionData">Profit</div>
          <div className="PositionData">Action</div>
        </div>
        {this.props.positions.map((position, i)=>
          <div className="position-container">
            <PositionItem 
              key={i}
              sellCompany={this.props.sellCompany}
              {...position}
              // name={position.name}
              // ticker={position.ticker}
              // amount={position.amount}
              // price={position.price}
              // cost={position.cost}
              // value={position.value}
              // profit={position.profit}
              // positionId={position.positionId}
            />
          </div>
          )}
      </div>
    );
  }
}
export default Positions;