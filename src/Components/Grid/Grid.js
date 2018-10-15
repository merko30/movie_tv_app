import React from 'react';

import { Item } from '../../Components';

import styles from './Grid.css';

const Grid = ({ list, active }) => {
  return (
    <div className={styles.grid}>
      {list.map(l => {
        return <Item item={l} key={l.id} active={active} />
      })}
    </div>)
}

export default Grid;