import React, { Component } from 'react';
import './App.css';
import ListView from './Components/ListView';
import PieChart from './Components/PieChart';
import BarChart from './Components/BarChart';
import DoughnutChart from './Components/DoughnutChart';
import LineChart from './Components/LineChart';
import {Table} from "semantic-ui-react";


class App extends Component {

    constructor() {
        super();
        this.state = {
            // skal erstattes med Redux
            items: [{
                "_id": "5bdd8a695402002b2ef1b0e7",
                "Varenummer": 6505103,
                "Varenavn": "Wodqa",
                "Volum": 0.1,
                "Pris": 100.1,
                "Literpris": 1001,
                "Varetype": "Vodka",
                "Fylde": "0",
                "Friskhet": 0,
                "Bitterhet": 0,
                "Sodme": "0",
                "Farge": "Blank.",
                "Lukt": "Ren aroma av mineraler.",
                "Smak": "Myk. mineralsk og lang smak.",
                "Passertil01": "",
                "Passertil02": "",
                "Passertil03": "",
                "Land": "Østerrike",
                "Distrikt": "Øvrige",
                "Argang": null,
                "Rastoff": "Hvete. vann",
                "Alkohol": 40,
                "Sukker": 2,
                "Syre": "Ukjent",
                "Produsent": "Qonzern",
                "Vareurl": "http://www.vinmonopolet.no/vareutvalg/varedetaljer/sku-6505103",
                "APK": 0.03996004
            }],
            chartData: {},
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {
        // Her vil vi implementere Ajax/Axios
        this.setState({
           chartData: {
               labels: ['beers', 'wine', 'liquor'],
               datasets:[{
                   label: 'number of units',
                   data: [10 , 20, 30, 0],
                   backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 245, 0.6)', 'rgba(255, 206, 86, 0.6)'],
               }],
           }
        });
    }






  render() {
    return (
        <div>
            <div className="App">
                <img src={"resources/vinmonopolet.png"} className="App-logo" alt="logo" />
                <ListView items={this.state.items} />

            </div>
            <div className="chartContainer">
                <LineChart chartData={this.state.chartData} legendPosition="bottom" topText="Line"/>
                <PieChart chartData={this.state.chartData} legendPosition="bottom" topText="Pie"/>
                <DoughnutChart chartData={this.state.chartData} legendPosition="bottom" topText="Doughnut"/>
                <BarChart chartData={this.state.chartData} legendPosition="bottom" topText="Bar"/>
            </div>
        </div>
    );
  }
}

export default App;
