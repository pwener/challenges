/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Message, Container } from 'semantic-ui-react';

import history from './helpers/history';
import alertActions from './actions/alertActions';

import RegisterAdminPage from './components/RegisterAdminPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import Heading from './components/Heading';
import HeroListPage from './components/HeroListPage';

const isLogged = () => {
  const admin = localStorage.getItem('admin');
  return admin && admin.length > 0;
};

/**
 * Should be used inside App to control render of private routes
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isLogged() ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )}
  />
);

const App = (props) => {
  const { alert, clearAlerts } = props;

  return (
    <>
      { isLogged() ? <Heading /> : null }
      { alert ? (
        <Container textAlign="center" style={{ marginBottom: '2vh' }}>
          <Message
            color={alert.color}
            onDismiss={() => clearAlerts()}
          >
            {alert.message}
          </Message>
        </Container>
      ) : null }
      <Router history={history}>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute exact path="/newAdmin" component={RegisterAdminPage} />
        <PrivateRoute exact path="/heroes" component={HeroListPage} />
      </Router>
    </>
  );
};

const mapState = (state) => ({
  alert: state.alert,
});

const actionCreators = {
  clearAlerts: alertActions.clear,
};


export default connect(mapState, actionCreators)(App);
