import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import Routes from './Routes/Routes';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
