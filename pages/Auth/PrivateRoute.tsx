import React from "react";
import { Redirect, Route } from "react-router-dom";

interface PrivateRouteProps {
  path: string;
  exact?: boolean;
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const token = localStorage.getItem("auth");
  return <>{token ? <Route {...props} /> : <Redirect to="/Auth/Login"/>}</>;
};

export default PrivateRoute;