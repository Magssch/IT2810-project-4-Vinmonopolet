import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';


class LineChart extends Component {

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        topText: 'data',
    };

    render() {

        return(
            <div className="chart">
                <Line
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

export default LineChart;