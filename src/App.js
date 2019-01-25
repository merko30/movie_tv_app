import React, { Component } from 'react';
import styles from './main.css';

import { Header } from './Components'
import Routes from './Routes';

class App extends Component {

  render() {

    return (<div style={{ background: window.location.pathname.indexOf('detail') === -1 && '#ededed' }}>
      {window.location.pathname.indexOf('detail') === -1 ? <Header /> : null}
      <div
        className={styles.container}>
        <Routes />
      </div>
    </div>
    );
  }
}

export default App;
