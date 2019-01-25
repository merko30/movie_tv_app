import React from 'react'
import styles from './Error.css';

export default function Error({ error }) {
    if (error) {
        return (
            <span className={styles.error}>{error}</span>
        )
    }
    return null;
}
