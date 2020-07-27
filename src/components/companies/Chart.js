import React, {Component} from 'react';
import {XYPlot, LineSeries} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import './Chart.css';
class Chart extends Component {
  constructor(){
    super();
    this.state = {
      data: [
        {x: 0, y:4},
        {x: 1, y:4},
        {x: 2, y:4},
        {x: 3, y:4},
        {x: 4, y:4},
        {x: 5, y:4},
        {x: 6, y:4},
        {x: 7, y:4},
        {x: 8, y:4},
        {x: 9, y:4},
        {x: 10, y:4},
        {x: 11, y:4},
        {x: 12, y:4},
        {x: 13, y:4},
        {x: 14, y:4},
        {x: 15, y:4},
        {x: 16, y:4},
        {x: 17, y:4},
        {x: 18, y:4},
        {x: 19, y:4},
        {x: 20, y:4},
        {x: 21, y:4},
        {x: 22, y:4},
        {x: 23, y:4},
        {x: 24, y:4},
        {x: 25, y:4},
        {x: 26, y:4},
        {x: 27, y:4},
        {x: 28, y:4},
        {x: 29, y:4},
      ]
    };
    this.updateChart = this.updateChart.bind(this);
  }

  componentWillMount(){
    this.interval = setInterval(this.updateChart, 1000);
  }

  updateChart(){
    const newRate = this.props.rate;
    const dataCopy = this.state.data;
    const lastX = dataCopy[dataCopy.length - 1].x;
    const newEntry = {x: lastX + 1, y: newRate};
    dataCopy.shift();
    dataCopy.push(newEntry);
    this.setState({data: dataCopy})
  }

  render(){
    return(
      <div className="chart-container">
        <XYPlot width={270} height={180}> 
          <LineSeries 
            data={this.state.data} 
            animation
          />
        </XYPlot>
      </div>
    );
  }
}

export default Chart;