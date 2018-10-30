import React, { Component } from 'react';
import './App.css';


const vinmonopolet = require('vinmonopolet');

class App extends Component {

  render() {

      vinmonopolet.getProducts().then(response => {
          console.log(response.products);// Array of products
          console.log(response.pagination); // Info on pagination
      });

    return (
      <div className="App">
          <img src={"resources/vinmonopolet.png"} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div>
    );
  }
}

export default App;
