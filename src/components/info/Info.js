import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  render() {
    return (
      <div className="panel">
        <h2>What's this?</h2>
        <div className="info">
          Market Simulator is a simple React App that simulates a very small stock market.<br />
      Each company has its own panel, updated every second, where you can see how the stock rate is doing.<br />
      Starting with £5000 cash, is up to you to decide the right moment to enter or leave the market by opening (BUY) or closing (SELL) positions.
    </div>
      </div>
    );
  }
}

export default Info;