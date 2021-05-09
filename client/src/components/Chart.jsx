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
                        label: this.props.labelSBuy,
                        data: this.props.dataSBuy,
                        backgroundColor: 'rgba(0, 255, 0, 1)',
                        borderColor: [
                            'rgba(255, 255, 255, 1)',
                        ],
                        borderWidth: 3
                    },
                    {
                        label: this.props.labelBuy,
                        data: this.props.dataBuy,
                        backgroundColor: 'rgba(100, 220, 20, 1)',
                        borderColor: [
                            'rgba(255, 255, 255, 1)',
                        ],
                        borderWidth: 3
                    },
                    {
                        label: this.props.labelHold,
                        data: this.props.dataHold,
                        backgroundColor: 'rgba(170, 170, 0, 1)',
                        borderColor: [
                            'rgba(255, 255, 255, 1)',
                        ],
                        borderWidth: 3
                    },
                    {
                        label: this.props.labelSell,
                        data: this.props.dataSell,
                        backgroundColor: 'rgba(220, 100, 0, 1)',
                        borderColor: [
                            'rgba(255, 255, 255, 1)',
                        ],
                        borderWidth: 3
                    },
                    {
                        label: this.props.labelSSell,
                        data: this.props.dataSSell,
                        backgroundColor: 'rgba(255, 0, 0, 1)',
                        borderColor: [
                            'rgba(255, 255, 255, 1)',
                        ],
                        borderWidth: 3
                    },
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