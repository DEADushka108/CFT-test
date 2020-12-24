import React from 'react';
import Main from '../main/main.jsx';
// import PropTypes from 'prop-types';
import {Router, Switch, Route} from 'react-router-dom';
import history from '../../history/history';
import {AppRoute} from '../../utils/const.js';

const App = (props) => {
  const {} = props;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={`${AppRoute.ROOT}`}>
          <Main/>;
        </Route>
        <Route exact path={`${AppRoute.USERS}`}>

        </Route>
      </Switch>
    </Router>
  );

};

App.propTypes = {};

export default App;
