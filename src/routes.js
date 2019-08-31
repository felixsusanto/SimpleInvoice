import React from "react";
import { Route, Switch } from "react-router";
import Home from "pages/Home/Home";

const Routes = props => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default Routes;
