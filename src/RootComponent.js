import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'reactstrap';
import routes from './mainRoutes';
import RouteWithSubRoutes from './Utils/Components/RouteWithSubRoutes';

const RootComponent = () => (
  <Router>
    <Container>
      {
        routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))
      }
    </Container>
  </Router>
);

export default RootComponent;

