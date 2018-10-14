import React from 'react';

import { Route, Switch } from 'react-router-dom';


import { TVShows, Detail, Movies, SearchResults, NotFound } from '../Components';


const Routes = () => {
  return (<Switch>
    <Route exact path="/" component={TVShows} />
    <Route exact path="/movies" component={Movies} />
    <Route exact path="/search" component={SearchResults} />
    <Route exact path="/:type/details/:id" component={Detail} />
    <Route exact path="*" component={NotFound} />
  </Switch>);
}

export default Routes;
