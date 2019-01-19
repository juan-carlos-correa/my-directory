import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import store from './store';
import routes from './mainRoutes';
import Routes from './Utils/Components/Routes';
import AuthGuard from './Auth/Containers/AuthGuard';

const RootComponent = () => (
  <Provider store={store}>
    <Router>
      <Container>
        <AuthGuard>
          {
            routes.map((route, i) => (
              <Routes key={i} {...route} />
            ))
          }
        </AuthGuard>
      </Container>
    </Router>
  </Provider>
);

export default RootComponent;

