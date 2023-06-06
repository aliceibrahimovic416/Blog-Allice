import React from "react";
import { Route, Switch, } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Welcome from "./Welcome";

export default () =>
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register}  />
    <Route path="/welcome" exact component={Welcome}  />
  </Switch>;