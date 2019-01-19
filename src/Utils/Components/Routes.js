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
    render={(props) => (
      isPrivate && !user.uid
      ? <Redirect to="/signin" />
      : <Component user={user} {...props} {...rest} />
    )}
  />
);

export default Routes;
