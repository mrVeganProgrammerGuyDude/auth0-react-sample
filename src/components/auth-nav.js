// Required for login system. See details here bro: https://auth0.com/blog/complete-guide-to-react-user-authentication/#Get-the-Starter-Application

import React from "react";
import AuthenticationButton from "./authentication-button";

const AuthNav = () => (
  <div className="navbar-nav ml-auto">
    <AuthenticationButton />
  </div>
);

export default AuthNav;
