import React, {Component} from 'react';
import PositionItem from './PositionItem';
import './Positions.css';

class Positions extends Component{
  render(){
    return(
      <div className="panel">
        <h2>Positions</h2>
        <div className="table">
          <div className="table-row">
              <div className="table-col table-head">Name</div>
              <div className="table-col table-head">Amount</div>
              <div className="table-col table-head">Price</div>
              <div className="table-col table-head">Cost</div>
              <div className="table-col table-head">Value</div>
              <div className="table-col table-head">Profit</div>
              <div className="table-col table-head">Action</div>
          </div>

          {this.props.positions.map((position, i)=>
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
          )}          
        </div>
      </div>
    );
  }
}
export default Positions;