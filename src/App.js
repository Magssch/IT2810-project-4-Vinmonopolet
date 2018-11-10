import React, { Component } from 'react';
import './App.css';
import ListView from './Components/ListView';
import Search from './Components/Search';
import Query from './Components/Query';
import { Form } from 'semantic-ui-react';
import PieChart from './Components/PieChart';
import BarChart from './Components/BarChart';
import DoughnutChart from './Components/DoughnutChart';
import LineChart from './Components/LineChart';

class App extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    // TODO skal erstattes med Redux
    state = {
        isLoading: false,
        searchQuery: {
            name: null,
            volume: null,
            country: null,
        },
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
        },
            {
            "_id": "5bdd8a6a5402002b2ef1c56b",
            "Varenummer": 9218201,
            "Varenavn": "Santa Sofia Montefoscarino Soave Classico 2017",
            "Volum": 0.75,
            "Pris": 100,
            "Literpris": 133.33,
            "Varetype": "Hvitvin",
            "Fylde": "7",
            "Friskhet": 7,
            "Bitterhet": 0,
            "Sodme": "2",
            "Farge": "Lys strågul.",
            "Lukt": "Aroma av hvit fersken og appelsinskall. Hint av lime og anis og blomstertoner.",
            "Smak": "Fin mineralitet. Fruktig anslag og bløt stil.",
            "Passertil01": "Skalldyr",
            "Passertil02": "Fisk",
            "Passertil03": "Lyst kjøtt",
            "Land": "Italia",
            "Distrikt": "Veneto",
            "Argang": 2017,
            "Rastoff": "Garganega 80%. Chardonnay 10%. Trebbiano 5%. Pinot Bianco 5%",
            "Alkohol": 12.5,
            "Sukker": 4.2,
            "Syre": "5.2",
            "Produsent": "Santa Sofia",
            "Vareurl": "http://www.vinmonopolet.no/vareutvalg/varedetaljer/sku-9218201",
            "APK": 0.093752344
        },
        {
            "_id": "5bdd8a6b5402002b2ef1cc4f",
            "Varenummer": 10148302,
            "Varenavn": "Pizza Lovers Vino Bianco",
            "Volum": 0.5,
            "Pris": 100,
            "Literpris": 200,
            "Varetype": "Hvitvin",
            "Fylde": "3",
            "Friskhet": 9,
            "Bitterhet": 0,
            "Sodme": "3",
            "Farge": "Gul.",
            "Lukt": "Hvite blomster.",
            "Smak": "Frisk og fruktig.",
            "Passertil01": "Skalldyr",
            "Passertil02": "Lyst kjøtt",
            "Passertil03": "Grønnsaker",
            "Land": "Italia",
            "Distrikt": "Friuli-Venezia Giulia",
            "Argang": null,
            "Rastoff": "Ribolla 33%. Friulano (Tai) 33%. Chardonnay 33%",
            "Alkohol": 11,
            "Sukker": 6,
            "Syre": "5.2",
            "Produsent": "Fossa Mala",
            "Vareurl": "http://www.vinmonopolet.no/vareutvalg/varedetaljer/sku-10148302",
            "APK": 0.055
        },],
            chartData: {},
    };

    volumeOptions = [{key: 0.33, value: 0.33, text: '0.33 l'}, {key: 0.5, value: 0.5, text: '0.5 l'}];
    countryOptions = [{key: "no", value: "no", text: 'Norge'}, {key: "fr", value: "fr", text: "Frankrike"}];
    typeOptions = [{key: "wi", value: "wi", text: 'Vin'}, {key: "be", value: "be", text: "Øl"}];

    handleChange = ({ name, value }) =>
    {
        let newQuery = this.state.searchQuery;
        newQuery[name] = value;
        this.setState({isLoading: true, searchQuery: newQuery})
    };

    render() {
        return (
          <div className="App">
              <img className="App-logo" src={"../resources/vinmonopolet.png"} alt={"Vinmonopolet"} />
              <Form style={{width: "80%"}}>
                  <Form.Group>
                      <Search isLoading={this.state.isLoading} onChange={this.handleChange}/>
                      <Query name="volume" placeholder="Volum" options={this.volumeOptions} onChange={this.handleChange}/>
                      <Query name="country" placeholder="Land" options={this.countryOptions} onChange={this.handleChange}/>
                      <Query name="type" placeholder="Type" options={this.typeOptions} onChange={this.handleChange}/>
                  </Form.Group>
              </Form>
              <ListView items={this.state.items} />
              <br/>
              {this.state.searchQuery.name}
              <br/>
              {this.state.searchQuery.volume}
          </div>
        );

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
