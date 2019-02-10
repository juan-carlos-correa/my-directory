import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Routes = ({
  component: Component,
  path,
  isPrivate,
  user,
  ...rest
}) => (
  <Route
    path={path}
    render={(props) => {
      if (isPrivate && !user.email) {
        return <Redirect to="/signin" />;
      }

      if (!isPrivate && user && user.uid) {
        return <Redirect to="/main/dashboard" />
      }

      return <Component user={user} {...props} {...rest} />
    }}
  />
);

export default Routes;
