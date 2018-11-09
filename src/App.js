import React, { Component } from 'react';
import './App.css';
import ListView from './Components/ListView';
import Search from './Components/Search';
import Query from './Components/Query';
import { Form } from 'semantic-ui-react';

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
        }]
    };

    handleChange = ({ name, value }) =>
    {
        this.setState({isLoading: true, searchQuery: {[name]: value}})
    };


    render() {
        return (
          <div className="App">
              <img className="App-logo" src={"../resources/vinmonopolet.png"} alt={"Vinmonopolet"} />
              <Form style={{width: "80%"}}>
                  <Form.Group>
                    <Search isLoading={this.state.isLoading} onChange={this.handleChange}/>
                      <Query name="volume" onChange={this.handleChange}/>
                  </Form.Group>
              </Form>
              <ListView items={this.state.items} />
              <br/>
              {this.state.searchQuery.name}
          </div>
        );
  }
}

export default App;
