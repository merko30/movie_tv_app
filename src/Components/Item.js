import React from 'react';

import { Link } from 'react-router-dom';

const Item = ({ active, item: { name, title, poster_path, vote_average, id, media_type } }) => {
  return (
    <Link
      to={{ pathname: `${active}/details/${id}`, state: { mediaType: media_type } }}
      className="grid-item"
      style={{
        backgroundImage: poster_path == null ? 'url(/images/no-image-available.jpg)' : `url(https://image.tmdb.org/t/p/original${poster_path})`
      }}>
      <div className="grid-back">
        {(title || name) && title ? <h3 className="grid-item-title">{title}</h3> : <h3 className="grid-item-title">{name}</h3>}
        {vote_average !== 0 && <p className="grid-item-average">{vote_average} <i className="fa fa-star"></i></p>}
      </div>
    </Link>
  )
}

export default Item;