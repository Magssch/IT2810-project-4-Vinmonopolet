import React, { Component } from 'react';
import './App.css';
import listView from './components/listView';
import { Table } from 'semantic-ui-react'


class App extends Component {

    state = {
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
    };

  render() {

    return (
      <div className="App">
          <img src={"resources/vinmonopolet.png"} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <listView items={this.state.items} />
          <Table fixed>
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Status</Table.HeaderCell>
                      <Table.HeaderCell>Description</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>

              <Table.Body>
                  <Table.Row>
                      <Table.Cell>John</Table.Cell>
                      <Table.Cell>Approved</Table.Cell>
                      <Table.Cell>
                          John is an interesting boy but sometimes you don't really have enough room to describe
                          everything you'd like
                      </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                      <Table.Cell>Jamie</Table.Cell>
                      <Table.Cell>Approved</Table.Cell>
                      <Table.Cell>
                          Jamie is a kind girl but sometimes you don't really have enough room to describe
                          everything you'd like
                      </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                      <Table.Cell>Jill</Table.Cell>
                      <Table.Cell>Denied</Table.Cell>
                      <Table.Cell>
                          Jill is an alright girl but sometimes you don't really have enough room to describe
                          everything you'd like
                      </Table.Cell>
                  </Table.Row>
              </Table.Body>
          </Table>
      </div>
    );
  }
}

export default App;
