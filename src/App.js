import React, { Component } from 'react';
import styles from './main.css';


import Routes from './Routes/Routes';

class App extends Component {

  render() {
    return (<div>
      <div className={styles.container}>
        <Routes />
      </div>
    </div>
    );
  }
}

export default App;
