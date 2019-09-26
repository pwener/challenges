import React from 'react';
import LoginForm from './components/LoginForm';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';
import { Router } from 'react-router-dom';
import { history } from './helpers/history';
import { alertActions } from './actions/alertActions';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

const App = (props) => {
  const { alert, clearAlerts } = props;

  return (
    <>
      {alert ? (
        <Message
          color={alert.color}
          style={{ textAlign: 'center' }}
          onDismiss={() => clearAlerts()}
        >
            {alert.message}
        </Message>
      ): null }
      <Router history={history}>
        <LoginForm />
      </Router>
    </>
  );
}

const mapState = (state) => {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};


export default connect(mapState, actionCreators)(App);;
