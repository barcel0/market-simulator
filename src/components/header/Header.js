import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
  render(){
    return(
      <div className="header">
      <div className="title">Market Simulator</div>
      <div className="reset-button" onClick={this.props.reset}>
        <img src={require('./reset.png')} alt="reset" className="reset-icon"/>
        RESET
      </div>
    </div>
    );
  }
}

export default Header;