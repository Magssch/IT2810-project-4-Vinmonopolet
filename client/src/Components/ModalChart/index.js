import React, { Component } from 'react';
import PieChart from '../PieChart';
import BarChart from '../BarChart';
import DoughnutChart from '../DoughnutChart';
import Modal from "react-responsive-modal";

class ModalChart extends Component {

    constructor() {
        super();

    }

    getFeedback(likes, dislikes) {
       return {
            labels: ['Likes', 'Dislikes'],
            datasets: [{
                label: 'Fjern data',
                data: [likes, dislikes, 0],
                backgroundColor: ['rgba(10, 255, 25, 0.6)', 'rgba(255, 0, 0, 0.6)'],
            }],
        };
    }

    getTastes(frisk, bitter, sodme) {
        return {
            labels: ['Friskhet', 'Bitterhet', 'Sødme'],
            datasets: [{
                label: 'Fjern data',
                data: [frisk, bitter, sodme, 0],
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 245, 0.6)', 'rgba(255, 206, 86, 0.6)'],
            }],
        };
    }

    render() {
        let feedbackData = this.getFeedback(this.props.likes, this.props.dislikes);
        let tasteData = this.getTastes(this.props.friskhet, this.props.bitterhet, this.props.sodme);
        return (
            <div>
                <Modal
                    open={this.props.open}
                    onClose={this.props.onClose}
                    showCloseIcon={false}
                    center={this.props.center}
                >
                    <h2>{this.props.topText}</h2>
                    <div style={{display:"grid", gridTemplateColumns: "200px 200px", gridRow: "auto auto", gridColumnGap: "20px", gridRowGap: "20px"}}>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <p>Utfyllende informasjon her jajajajaajaj, memmefemfefe efe sf sa dfasdfgas fg afg fgad garg</p>
                        </div>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <DoughnutChart
                                chartData={tasteData}
                                legendPosition="bottom"
                                topText="Smakssammensetning"
                            />
                        </div>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <DoughnutChart
                                chartData={tasteData}
                                legendPosition="bottom"
                                topText="Smakssammensetning"
                            />
                        </div>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <BarChart
                                chartData={feedbackData}
                                legendPosition="bottom"
                                topText="Tilbakemeldinger"
                            />
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ModalChart;