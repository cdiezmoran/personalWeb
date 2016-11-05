import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import i18n from 'meteor/universe:i18n';

import AppContainer from '../../ui/containers/AppContainer.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}/>
  </Router>
);
