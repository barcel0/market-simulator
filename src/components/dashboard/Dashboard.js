import React, {Component} from 'react';
import './Dashboard.css'

class Dashboard extends Component{
    render(){
        return(
            <div class="dashboard-container">
                <h2>Dashboard</h2>
                <div className="dashboard-row">
                    Cash: ${this.props.cash}
                </div>
            </div>
        )
    }
}
export default Dashboard;