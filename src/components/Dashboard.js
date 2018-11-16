import React, {Component} from 'react';
import './Dashboard.css'

class Dashboard extends Component{
    render(){
        return(
            <div className="DashboardRow">
                Cash: ${this.props.cash}
            </div>
        )
    }
}
export default Dashboard;