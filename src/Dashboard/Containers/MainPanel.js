import React from 'react';
import dashboardRoutes from '../dashboardRoutes';
import Routes from '../../Utils/Components/Routes';
import NavbarContainer from './NavbarContainer';
import DashboardContainer from './DashboardContainer';

const MainPanel = ({ ...rest }) => (
  <div>
    <NavbarContainer {...rest} />
    {
      dashboardRoutes.map((route, i) => (
        <Routes key={i} {...route} {...rest} />
      ))
    }
    <DashboardContainer />
  </div>
);

export default MainPanel;
