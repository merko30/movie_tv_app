import React from 'react';

import { Item, Loading } from '../../Components';

import styles from './Grid.css';

const Grid = ({ list }) => {
  return (
    <div className={styles.grid}>
      {list ? list.map(l => {
        return <Item item={l} key={l.id} />
      }) : <Loading />}
    </div>)
}

export default Grid;