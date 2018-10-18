import React from 'react';
import { connect } from 'react-redux';

import styles from './Header.css';

import { Error, Search } from '../../Components';

import { setActive } from '../../store/actions';


class Header extends React.Component {

    setData = (l, e) => {
        e.target.classList.toggle('active');
        this.props.setActive(l);
    }

    render() {
        return (
            <header >
                <div className={styles.container}>
                    <div className={styles.buttons}>
                        <button
                            className={styles.button}
                            onClick={this.setData.bind(this, 'movies')}>Movies</button>
                        <button
                            className={styles.button}
                            onClick={this.setData.bind(this, 'tv')}>TV shows</button>
                    </div>
                    <Search />
                    <Error />
                </div >
            </header >

        )
    }
}

export default connect(null, { setActive })(Header);