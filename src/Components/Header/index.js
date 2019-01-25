import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';



export default function Header() {
    return (
        <header >
            <div className={styles.container}>
                <div className={styles.buttons}>
                    <Link
                        className={styles.button}
                        to="/movies"
                    >Movies</Link>
                    <Link
                        className={styles.button}
                        to="/tvshows"
                    >TV shows</Link>
                    <Link
                        className={styles.button}
                        to="/search"
                    >Search</Link>
                </div>
            </div >
        </header >

    )
}
