import React, {Component} from 'react';
import './Dashboard.css'

class Dashboard extends Component{
    render(){
        return(
            <div className="panel">
                <h2>Dashboard</h2>
                CASH: <span className="green">${this.props.cash}</span>
            </div>
        )
    }
}
export default Dashboard;