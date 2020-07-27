import React, { Component } from 'react';
//Components
import Header from './components/header/Header';
import Companies from './components/companies/Companies';
import Positions from './components/positions/Positions';
import Dashboard from './components/dashboard/Dashboard';
import Info from './components/info/Info';
//CSS
import './App.css';
//Initial state
const initialState = {
  cash: 5000.00,
  equity: 5000.00,
  companies: [
    { name: 'BARCLAYS PLC', ticker: 'BARC', id: 1, rate: 50, variation: 0 },
    { name: 'RIO TINTO PLC', ticker: 'RIO', id: 2, rate: 150, variation: 0 },
    { name: 'UNILEVER PLC', ticker: 'ULVR', id: 3, rate: 5, variation: 0 },
    { name: 'BHP GROUP PLC', ticker: 'BHP', id: 4, rate: 15, variation: 0 },
  ],
  positions: []
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.rateUpdate = this.rateUpdate.bind(this);
    this.positionUpdate = this.positionUpdate.bind(this);
    this.equityUpdate = this.equityUpdate.bind(this);
    this.buyCompany = this.buyCompany.bind(this);
    this.sellCompany = this.sellCompany.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentDidMount() {
    this.interval = setInterval(this.rateUpdate, 1000);
    this.interval = setInterval(this.positionUpdate, 1000);
    this.interval = setInterval(this.equityUpdate, 1000);
  }

  rateUpdate() {
    this.setState(prevState => ({
      companies: prevState.companies.map(
        obj => {
          const prevRate = obj.rate;
          const rawVariation = (Math.random() * (0.98 - 1.02) + 1.02).toFixed(3);
          return Object.assign(obj, {
            variation: +((rawVariation - 1) * 100).toFixed(2),
            rate: +(prevRate * rawVariation).toFixed(3)
          })
        }
      )
    }));
  }

  positionUpdate() {
    const companiesCopy = this.state.companies;
    const positionsCopy = this.state.positions;
    positionsCopy.forEach((position) => {
      companiesCopy.filter(company => company.id === position.companyId).map(
        (company) => {
          position.value = +(company.rate * position.amount).toFixed(2);
          position.profit = +(position.value - position.cost).toFixed(2);
          return true;
        }
      );
    });
    this.setState({ positions: positionsCopy });
  }

  equityUpdate() {
    const positionsCopy = this.state.positions,
      values = positionsCopy.map(position => position.value),
      totalValue = values.reduce((a, b) => a + b, 0),
      newEquity = (this.state.cash + totalValue).toFixed(2);
    this.setState({ equity: newEquity });
    if (this.state.equity < 0) {
      alert('You are broke!');
      this.reset();
    }
  }

  buyCompany(buyAmount, id) {
    const targetCompany = this.state.companies.filter((company) => company.id === id);
    const buyCost = +(targetCompany[0].rate * buyAmount).toFixed(2);
    if (buyCost > this.state.cash) {
      alert('Not enough money!');
    } else {
      const positionsCopy = this.state.positions;
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
      this.setState({ positions: positionsCopy });
      //update cash
      this.setState({ cash: newCash });
    }
  }

  sellCompany(id) {
    const closedPosition = this.state.positions.filter((position) => position.positionId === id);
    const filteredPositions = this.state.positions.filter((position) => position.positionId !== id);
    this.setState({ positions: filteredPositions });

    //update cash
    const newCash = +(this.state.cash + closedPosition[0].value).toFixed(2);
    this.setState({ cash: newCash });
  }

  reset() {
    this.setState({ cash: 5000, equity: 5000, positions: [] });
  }

  render() {
    return (
      <div className="App">
        <Header reset={this.reset} />
        <div className="main">
          <Info />
          <Companies
            companies={this.state.companies}
            buyCompany={this.buyCompany}
          />
          <Dashboard
            cash={this.state.cash}
            equity={this.state.equity}
          />
          <Positions
            positions={this.state.positions}
            sellCompany={this.sellCompany}
          />
        </div>
      </div>
    );
  }
}
export default App;