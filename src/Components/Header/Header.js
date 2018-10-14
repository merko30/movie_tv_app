import React from 'react';

import { Link } from 'react-router-dom';

import { Error, Search } from '../../Components';

import styles from './Header.css';

const Header = () => {
    return (<div className={window.location.pathname.indexOf('detail') !== -1 ? styles.header : styles["header-bg"]}>
        <div className={window.location.pathname.indexOf('detail') !== -1 ? styles.header : styles["header-container"]}>

            <div className={styles.buttons}>
                <Link className={styles.button} to="/movies">Movies</Link>
                <Link className={styles.button} to="/">TV shows</Link>
            </div>
            <Search />
            <Error />
        </div>
    </div>
    )
}

export default Header;