import React from "react";
import { Route, Switch,withRouter } from "react-router-dom";
import ResetPassword from "./containers/auth/ResetPassword";
import ResetPasswordConfirm from "./containers/auth/ResetPasswordConfirm";
import Activate from "./containers/auth/Activate";
import AuthMain from "./containers/auth/AuthMain";
import PrivateRoute from "util/PrivateRoute";
import TheLayout from './containers/dashboard/containers/TheLayout'


const MainApp = () => {
  return (
    <>
      <Switch>
        <Route path="/activate/:uid/:token" component={Activate} />
        <PrivateRoute
          path="/dashboard"
          name="Home"
          render={props => <TheLayout {...props} />}
        />     
        <Route exact path="/" component={AuthMain} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route
          path="/password/reset/confirm/:uid/:token"
          component={ResetPasswordConfirm}
        />
      </Switch>
    </>
  );
};

export default withRouter(MainApp);

   
     