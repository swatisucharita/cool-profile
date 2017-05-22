import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import UserProfilePage from './components/user/UserProfilePage';
import RegisterUserPage from './components/register/RegisterUserPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="register" component={RegisterUserPage} />
    <Route path="user/:id" component={UserProfilePage} />
  </Route>
);
