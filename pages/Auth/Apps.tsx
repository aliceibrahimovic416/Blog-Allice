import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import SignUp from "./Register";
import Login from "./Login";
import Dashboard from "./dashboard";
import PrivateRoute from "./PrivateRoute";

function Apps() {
  return (
      <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/Auth/Login" component={Login}/>
        <Route exact path="/Auth/Register" component={SignUp} />
        <Route path="/Auth/dashboard" exact component={Dashboard}  />
        </Switch>
    </BrowserRouter>
  );
}
export default Apps;