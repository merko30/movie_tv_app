import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Header.css';

import { Error, Search } from '../../Components';

import { setActive } from '../../store/actions';


class Header extends React.Component {


    setData = (l) => {
        this.props.setActive(l);
    }

    render() {
        const { search } = this.props;
        return (<div className={window.location.pathname.indexOf('detail') !== -1 ? styles.header : styles["header-bg"]}>
            <div className={window.location.pathname.indexOf('detail') !== -1 ? styles.header : styles["header-container"]}>

                <div className={styles.buttons}>
                    {search && <Link className={styles.button} to="/">Go home</Link>}
                    {!search && <button className={styles.button} onClick={() => { this.setData('movies') }}>Movies</button>}
                    {!search && <button className={styles.button} onClick={() => { this.setData('tv') }}>TV shows</button>}
                </div>
                <Search />
                <Error />
            </div>
        </div>
        )
    }
}

export default connect(null, { setActive })(Header);