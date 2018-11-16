import React, { Component } from 'react';
import CompanyItem from './components/CompanyItem';
import BuyCompany from './components/BuyCompany';
import PositionItem from './components/PositionItem';
import SellCompany from './components/SellCompany';
import Dashboard from './components/Dashboard'
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      cash: 5000,    
      companies: [
        {
          name: 'Santander',
          ticker: 'SAN',
          id: 1,
          rate: 4,
          variation: 0.00,        
        },
        {
          name: 'BBVA',
          ticker: 'BBVA',
          id: 2,
          rate: 8,
          variation: 0.00,
        },
        {
          name: 'Viscofan',
          ticker: 'VIS',
          id: 3,
          rate: 20,
          variation: 0.00,
        },
      ],
      positions: [
        // {
        //   name: 'Santander',
        //   ticker: 'SAN',
        //   companyId: 1,
        //   positionId: 1,
        //   amount: 25,
        //   price: 93.609,
        //   cost: 2340.22,
        //   value: 2651.23
        // },
        // {
        //   name: 'BBVA',
        //   ticker: 'BBVA',
        //   companyId: 2,
        //   positionId: 2,
        //   amount: 40,
        //   price: 88.72,
        //   cost: 3548.8,
        //   value: 2651.23
        // },
        // {
        //   name: 'BBVA',
        //   ticker: 'BBVA',
        //   companyId: 2,
        //   positionId: 3,
        //   amount: 10,
        //   price: 88.72,
        //   cost: 2548.8,
        //   value: 1651.23
        // },
      ]

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
    console.log(`closed position: ${closedPosition}`);
    const filteredPositions = this.state.positions.filter((position)=> position.positionId !== id);
    this.setState({positions: filteredPositions});
    
    //update cash
    const newCash = this.state.cash + closedPosition[0].value
    this.setState({cash: newCash});
  }

  cashUpdate(operationAmount){
    this.setState({cash: +(this.state.cash - operationAmount).toFixed(2)});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Dashboard</h2>
          <Dashboard 
            cash={this.state.cash}
          />
          <h2>Companies</h2>
          {this.state.companies.map((company, i) =>
          <div className="MainRow">
            <CompanyItem
              key={i}
              name={company.name} 
              ticker={company.ticker} 
              rate={company.rate} 
              variation={company.variation}
              id={company.id}
              buyCompany={this.buyCompany}
            />
            <BuyCompany 
              id={company.id}
              buyCompany={this.buyCompany}
            />
            </div>
          )}
          <h2>Positions</h2>
          <div className="MainRow">
                <div className="PositionData">Name</div>
                <div className="PositionData">Ticker</div>
                <div className="PositionData">Amount</div>
                <div className="PositionData">Price</div>
                <div className="PositionData">Cost</div>
                <div className="PositionData">Value</div>
                <div className="PositionData">Profit</div>
                <div className="PositionData">Action</div>
            </div>
          {this.state.positions.map((position, i)=>
            <div className="MainRow">
              <PositionItem 
                key={i}
                name={position.name}
                ticker={position.ticker}
                amount={position.amount}
                price={position.price}
                cost={position.cost}
                value={position.value}
                profit={position.profit}
              />
              <SellCompany 
                positionId={position.positionId}
                sellCompany={this.sellCompany}
              />
            </div>
            )}
        </div>
      </div>
    );
  }
}

export default App;