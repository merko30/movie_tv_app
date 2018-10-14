import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { Detail, Home, NotFound } from '../Components';


const Routes = () => {
  return (<Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/:type/details/:id" component={Detail} />
    <Route exact path="*" component={NotFound} />
  </Switch>);
}

export default Routes;
