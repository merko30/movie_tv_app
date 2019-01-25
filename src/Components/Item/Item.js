import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import styles from './Item.css';

const Item = ({ item: { name, title, poster_path, vote_average, id, media_type } }) => {
  const path = window.location.pathname;
  const from = path.includes('movie') ? 'movie' : path.includes('tv') ? 'tv' : media_type;
  return (
    <Link
      to={{ pathname: `/${from}/details/${id}`, state: { mediaType: media_type, from } }}
      className={styles["grid-item"]}
      style={{
        backgroundImage: poster_path == null ?
          'url(/images/no-image-available.jpg)' :
          `url(https://image.tmdb.org/t/p/original${poster_path})`
      }}>

      <div className={styles["grid-back"]}>
        {(title || name) && title ?
          <h3 className={styles["grid-item-title"]}>{title}</h3> :
          <h3 className={styles["grid-item-title"]}>{name}</h3>}

        {vote_average !== 0 &&
          <p className={styles["grid-item-average"]}>
            {vote_average} <i className="fa fa-star" style={{ color: "rgb(167, 111, 60)" }}></i>
          </p>}

      </div>
    </Link>
  )
}

export default withRouter(Item);