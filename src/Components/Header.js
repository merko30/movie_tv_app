import React from 'react';

import { Link } from 'react-router-dom';

import Search from './Search';
import Error from './Error';

const Header = () => {
    return (
        <div className={window.location.pathname.indexOf('detail') !== -1 ? "header" : "header-container"}>
            <div className="buttons">
                <Link className="button" to="/movies">Movies</Link>
                <Link className="button" to="/">TV shows</Link>
            </div>
            <Search />
            <Error />
        </div>
    )
}

export default Header;