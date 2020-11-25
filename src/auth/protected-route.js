// src/auth/protected-route.js
// Required for login system. See details here bro: https://auth0.com/blog/complete-guide-to-react-user-authentication/#Get-the-Starter-Application

import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components/index";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

export default ProtectedRoute;
