import React from 'react';

import { Item, Loading } from '../../Components';

import styles from './Grid.css';

const Grid = ({ list, active }) => {
  return (
    <div className={styles.grid}>
      {list ? list.map(l => {
        return <Item item={l} key={l.id} active={active} />
      }) : <Loading />}
    </div>)
}

export default Grid;