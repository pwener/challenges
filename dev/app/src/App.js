import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Router } from 'react-router-dom';
import { Message, Container } from 'semantic-ui-react';

import { history } from './helpers/history';
import { alertActions } from './actions/alertActions';

import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import Heading from './components/Heading';

const isLogged = () => !!localStorage.getItem('admin')

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      isLogged() ? (
        <>
          <Component {...props} />
        </>
      ) : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

const App = (props) => {
  const { alert, clearAlerts } = props;

  return (
    <>
      { isLogged() ? <Heading /> : null }
      { alert ? (
        <Container textAlign="center" style={{ marginBottom: '2vh'}}>
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
      </Router>
    </>
  );
}

const mapState = (state) => ({
  alert: state.alert,
})

const actionCreators = {
  clearAlerts: alertActions.clear
};


export default connect(mapState, actionCreators)(App);;
