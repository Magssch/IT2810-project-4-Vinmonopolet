import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';


class DoughnutChart extends Component {

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        topText: 'data',
    };

    render() {

        return(
            <div className="chart">
                <Doughnut
                    data={this.props.chartData}
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