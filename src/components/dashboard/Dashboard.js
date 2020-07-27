import React, { Component } from 'react';
import './Dashboard.css'

class Dashboard extends Component {
    render() {
        return (
            <div className="panel">
                <h2>Dashboard</h2>
                <div className="dashboard-data">CASH: <span>£{this.props.cash}</span></div>
                <div className="dashboard-data">EQUITY: <span>£{this.props.equity}</span></div>
            </div>
        )
    }
}
export default Dashboard;