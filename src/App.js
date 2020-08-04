import PrivateRoute from "components/shared/PrivateRoute";
import PublicRoute from "components/shared/PublicRoute";
import PrivateLayout from "containers/PrivateLayout";
import PublicLayout from "containers/PublicLayout";
import React from "react";
import { Router, Switch } from "react-router-dom";
import "scss/style.scss";
import { browserHistory } from "utils/history";

const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <PrivateRoute
          path="/admin"
          name="Private Route"
          component={PrivateLayout}
        />
        <PublicRoute path="/" name="Public Route" component={PublicLayout} />
      </Switch>
    </Router>
  );
};

export default App;
