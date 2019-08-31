import React from "react";
import { Route, Switch } from "react-router";
import Home from "pages/Home/Home";
import Clients from "pages/Clients/Clients";
import Invoices from "pages/Invoices/Invoices";
import Settings from "pages/Settings/Settings";

const Routes = props => (
  <div>
    <Switch>
      <Route exact path="/overview" component={Home} />
      <Route path="/clients" component={Clients} />
      <Route path="/invoices" component={Invoices} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </div>
);

export default Routes;
