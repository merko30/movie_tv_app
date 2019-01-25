import React from 'react';
import PropTypes from 'prop-types';

import styles from './Search.css';

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
}

export default function Search({ handleChange, searchTerm }) {
  return (<div className={styles.container}>
    <input
      type="text"
      className={styles.input}
      onChange={handleChange}
      value={searchTerm}
      placeholder="Search movies or tv shows..."
    />
  </div>)
}