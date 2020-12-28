import React from 'react';
import Main from '../main/main.jsx';
// import PropTypes from 'prop-types';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import history from '../../history/history';
import {AppRoute} from '../../utils/const.js';
import ContactScreen from '../contact-screen/contact-screen.jsx';
import UsersScreen from '../users-screen/users-screen.jsx';
import UserScreen from '../user-screen/user-screen.jsx';

const App = () => {

  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={`${AppRoute.ROOT}`}>
          <Main/>
        </Route>
        <Route exact path={`${AppRoute.USERS}`}>
          <UsersScreen/>
        </Route>
        <Route exact path={`${AppRoute.CONTACTS}`}>
          <ContactScreen/>
        </Route>
        <Route exact path={`${AppRoute.USER}/:id`} render={(routeProps) => {
          return <UserScreen {...routeProps}/>;
        }}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
