import React, { useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Image,
  Segment,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import adminActions from '../actions/adminActions';

const LoginPage = (props) => {
  const { login } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Image src="logo.png" size="medium" centered />
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={e => setEmail(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button color="teal" fluid size="large" onClick={() => login(email, password)}>
              Admin Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

const actionCreators = {
  login: adminActions.login,
};

export default connect(null, actionCreators)(LoginPage);
