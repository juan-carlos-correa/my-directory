import React from 'react';
import dashboardRoutes from '../dashboardRoutes';
import Routes from '../../Utils/Components/Routes';
import NavbarContainer from './NavbarContainer';

const MainPanel = ({ ...rest }) => (
  <div>
    <NavbarContainer {...rest} />
    {
      dashboardRoutes.map((route, i) => (
        <Routes key={i} {...route} {...rest} />
      ))
    }
  </div>
);

export default MainPanel;
