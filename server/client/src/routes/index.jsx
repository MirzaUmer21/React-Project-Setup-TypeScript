import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes
} from 'react-router-dom';
import { Login } from '../containers/Login.jsx';
import { Home } from '../containers/Home.jsx';
import { SideBar } from '../shared/SideBar';

import { Links } from '../static/Links';
import ErrorBoundary from './ErrorBoundary';
import { PrivateRoutes } from './PrivateRoutes';
import { Signup } from '../containers/Signup.jsx';

const AppRoutes = () => {
  const PageLayout = () => {
    return (
      <Container fluid>
        <Row>
          <Col lg={3}>
            <SideBar />
          </Col>
          <Col lg={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    );
  };
  const NoMatch = () => (
    <div>
      <h3>Page Not Found</h3>
    </div>
  );
  function routeComponents() {
    return (
      <Router>
        <>
          <Routes>
            <Route element={<ErrorBoundary />}>
              <Route element={<PageLayout />}>
                <Route path='/' element={<PrivateRoutes />}>
                  <Route exact path={Links.home} element={<Home />} />
                </Route>
              </Route>
            </Route>
            <Route exact path={Links.login} element={<Login />} />
            <Route exact path={Links.signup} element={<Signup />} />

            <Route path='*' element={<NoMatch />} />
          </Routes>
        </>
      </Router>
    );
  }
  return routeComponents();
};
export default AppRoutes;
