import React from 'react';
import { Switch } from 'react-router-dom';
import dashboardRoutes from '../dashboardRoutes';
import Routes from '../../Utils/Components/Routes';
import NavbarContainer from './NavbarContainer';

const MainPanel = ({ ...rest }) => (
  <div>
    <NavbarContainer {...rest} />
    <Switch>
      {
        dashboardRoutes.map((route, i) => (
          <Routes key={i} {...route} {...rest} />
        ))
      }
    </Switch>
  </div>
);

export default MainPanel;
