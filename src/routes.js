// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import App from './components/App';
import About from './components/About';
import Posts from './components/Posts';
import PostPage from './components/PostPage';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/posts" component={Posts} />
    <Route path="/posts/:id" component={PostPage}/>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
