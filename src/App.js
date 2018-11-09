import React, { Component } from 'react';
import './App.css';
import ListView from './Components/ListView';
import {Table} from "semantic-ui-react";


class App extends Component {

    state = {

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
        }]
    };

  render() {
    return (
      <div className="App">
          <img src={"resources/vinmonopolet.png"} className="App-logo" alt="logo" />
          <listView items={this.state.items} />
      </div>
    );
  }
}

export default App;
