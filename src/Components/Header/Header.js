import React from 'react';
import { connect } from 'react-redux';

import styles from './Header.css';

import { Error, Search } from '../../Components';

import { setActive } from '../../store/actions';


class Header extends React.Component {


    setData = (l) => {
        this.props.setActive(l);
    }

    render() {
        return (<div className={window.location.pathname.indexOf('detail') !== -1 ? styles.header : styles["header-bg"]}>
            <div className={window.location.pathname.indexOf('detail') !== -1 ? styles.header : styles["header-container"]}>

                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() => { this.setData('movies') }}>Movies</button>
                    <button className={styles.button} onClick={() => { this.setData('tv') }}>TV shows</button>
                </div>
                <Search />
                <Error />
            </div>
        </div>
        )
    }
}

export default connect(null, { setActive })(Header);