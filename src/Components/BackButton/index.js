import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

BackButton.propTypes = {
    from: PropTypes.string.isRequired,
    isSearch: PropTypes.bool.isRequired
}



let style = {
    position: "absolute",
    top: "1.5em",
    left: "1.8em",
    backgroundColor: "white",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

let iStyle = {
    color: "black"
}




export default function BackButton({ from, isSearch }) {
    let linkTo = isSearch ? '/search' : from === 'movie' ? '/movies' : '/';
    return (
        <Link
            to={linkTo}
            style={style}>
            <i className={`fa fa-arrow-left`} style={iStyle}></i>
        </Link>
    )
}
