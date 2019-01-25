import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { Detail, TvShows, NotFound, Movies, SearchPage } from './pages';


const Routes = () => {
  return (<Switch>
    <Route exact path='/' component={TvShows} />
    <Route path='/tvshows' component={TvShows} from="tv_shows" />
    <Route path="/movies" component={Movies} from="movies" />
    <Route path="/search" component={SearchPage} from="search" />
    <Route exact path="/:type/details/:id" component={Detail} />
    <Route exact path="*" component={NotFound} />
  </Switch>);
}

export default Routes;
