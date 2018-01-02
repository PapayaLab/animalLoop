import React from 'react';
import {
  Route,
} from 'react-router-dom';

import ConnectedSwitch from './ConnectedSwitch';
import Home from './home/Home';
import Dashboard from './dashboard';
import Login from './login';


function Routes() {
  return (
    <main role="application">
      <ConnectedSwitch>
        {/* Login */}
        <Route
          path="/"
          exact
          component={Login}
        />
        {/* Login */}
        <Route
          path="/dashboard"
          component={Dashboard}
        />
        {/* Error 404 */}
        <Route component={Home} />
      </ConnectedSwitch>
    </main>
  );
}

export default Routes;
