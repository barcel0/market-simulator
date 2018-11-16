import React, { Component } from 'react';
//Components
import Companies from './components/companies/Companies';
import Positions from './components/positions/Positions';
import Dashboard from './components/dashboard/Dashboard'
//CSS
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cash: 5000,    
      companies: [
        { name: 'Santander', ticker: 'SAN', id: 1, rate: 4, variation: 0},
        { name: 'BBVA',ticker: 'BBVA',id: 2, rate: 5, variation: 0},
        { name: 'Viscofan', ticker: 'VIS', id: 3, rate: 50, variation: 0},
        { name: 'Mapfre', ticker: 'MAP', id: 4, rate: 2.50, variation: 0},
      ],
      positions: []
    };
    this.rateUpdate = this.rateUpdate.bind(this);
    this.positionUpdate = this.positionUpdate.bind(this);
    this.buyCompany = this.buyCompany.bind(this);
    this.sellCompany = this.sellCompany.bind(this);
  }
  
  componentDidMount(){
    this.interval = setInterval(this.rateUpdate, 1000);   
    this.interval = setInterval(this.positionUpdate, 1000);    
  }

  rateUpdate(){
    this.setState(prevState => ({
      companies: prevState.companies.map(
        obj => {
          const prevRate = obj.rate;
          const rawVariation = (Math.random() * (0.98 - 1.02) + 1.02).toFixed(3);
          return Object.assign(obj, {
            variation: +((rawVariation-1)*100).toFixed(2),
            rate: +(prevRate*rawVariation).toFixed(3)
          })}
      )
    }));
  }

  positionUpdate(){
    const companiesCopy = this.state.companies;
    const positionsCopy = this.state.positions;
    positionsCopy.forEach((position)=>{
      companiesCopy.filter(company => company.id === position.companyId).map(
        (company)=>{
          position.value = +(company.rate * position.amount).toFixed(2);
          position.profit = +(position.value - position.cost).toFixed(2);
          return true;
        }
      );
    });
    this.setState({positions: positionsCopy});
  }

  buyCompany(buyAmount, id){
    const positionsCopy = this.state.positions;
    const targetCompany = this.state.companies.filter((company)=> company.id === id);
    const buyCost = +(targetCompany[0].rate * buyAmount).toFixed(2);
    const newCash = +(this.state.cash - buyCost).toFixed(2);
    
    positionsCopy.push({
      name: targetCompany[0].name,
      ticker: targetCompany[0].ticker,
      companyId: targetCompany[0].id,
      positionId: positionsCopy.length + 1,
      amount: buyAmount,
      price: +targetCompany[0].rate.toFixed(2),
      cost: buyCost,
      value: buyCost,
      profit: 0
    });

    this.setState({positions: positionsCopy});

    //update cash
    this.setState({cash: newCash});
  }

  sellCompany(id){
    const closedPosition=this.state.positions.filter((position)=> position.positionId === id);
    const filteredPositions = this.state.positions.filter((position)=> position.positionId !== id);
    this.setState({positions: filteredPositions});
    
    //update cash
    const newCash = this.state.cash + closedPosition[0].value
    this.setState({cash: newCash});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Dashboard 
            cash={this.state.cash}
          />
          <Companies 
            companies = {this.state.companies}
            buyCompany = {this.buyCompany}
          />
          <Positions 
            positions = {this.state.positions}
            sellCompany = {this.sellCompany}
          />
        </div>
      </div>
    );
  }
}
export default App;