import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Users from './components/Users';

const sayHi = ()=> console.log('hello');

const Routes = ()=> (
    <Router history={ hashHistory }>
      <Route path='/' component={ Layout } onEnter={sayHi}>
        <IndexRoute component={Home} />
        <Route path='/users' component={ Users } />
      </Route>
    </Router>
);

export default Routes;
