import React from 'react';

import Item from './Item';

const Grid = ({ list, active }) => {
  return (<div className="grid">
    {list.map(l => {
      return <Item item={l} key={l.id} active={active} />
    })}
  </div>)
}

export default Grid;