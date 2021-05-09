import React, { Component } from 'react'
import Chart from "chart.js";

import "../styles.css";

export default class Graph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "bar",
            data: {
                labels: this.props.periods,
                datasets: [
                    {
                        label: this.props.label,
                        data: this.props.data,
                    }
                ]
            },
            options: {
                
            }
        });
    }
    render() {
        return (
            <div className={'graphContainer'}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}