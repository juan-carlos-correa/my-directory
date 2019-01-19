import React from 'react';
import NavbarContainer from './NavbarContainer';

const MainPanel = ({ ...rest }) => (
  <div>
    <NavbarContainer {...rest} />
    <h1>MainPanel</h1>
  </div>
);

export default MainPanel;
