import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';


class DoughnutChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData,
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        topText: 'data',
    }

    render() {

        return(
            <div className="chart">
                <Doughnut
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: 'Number of units',
                            text: this.props.topText,
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition,
                        }
                    }}
                />
            </div>
        )
    }

}

export default DoughnutChart;