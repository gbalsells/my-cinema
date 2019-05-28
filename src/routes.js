import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'; 
import Detail from './pages/Detail';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/movies/:idMovie" component={Detail} />
    <Route path='*' component={ () => <h1> Error. Page not found.</h1>} />
  </Switch>
)

export default Routes;