import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './components/App';
import About from './components/About';
import Repos from './components/Repos';
import Home from './components/Home';
import Repo from './components/Repo';

render((
  <Router history={hashHistory}>
    {/*配置根路由*/}
    <Route path="/" component={App}>
      {/*配置子路由*/}
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/about" component={About}></Route>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:name/:repo" component={Repo}></Route>
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));