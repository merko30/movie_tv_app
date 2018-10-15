import React, { Component } from 'react';
import styles from './main.css';


import Routes from './Routes/Routes';

class App extends Component {

  render() {
    return (
      <div
        className={styles.bg}
        style={{ background: `url(images/bg.jpg)` }}>
        <div className={styles.container}>
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
