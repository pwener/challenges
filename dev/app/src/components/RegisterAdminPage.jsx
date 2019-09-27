/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import adminActions from '../actions/adminActions';

const RegisterAdminPage = ({ adminStore, register }) => {

  const { errors } = adminStore;

  const [admin, setAdmin] = useState({});

  return (
    <Grid textAlign="center" style={{ height: '50vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Add new administrator
        </Header>
        { errors && errors.length > 0 ? (
          <Message
            error
            header="There was some errors with your submission"
            list={errors}
          />
        ) : null}
        <Form size="large">
          <Segment stacked textAlign="left">
            <Form.Input
              fluid
              label="Email"
              labelPosition="left"
              placeholder="The new admin's e-mail address"
              onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
            />
            <Form.Input
              fluid
              label="Login"
              labelPosition="left"
              placeholder="Type something unique and memorable"
              onChange={(e) => setAdmin({ ...admin, login: e.target.value })}
            />
            <Form.Input
              fluid
              label="Password"
              labelPosition="left"
              placeholder="Between 6-25 chars"
              type="password"
              onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
            />
            <Form.Input
              label="Password confirmation"
              labelPosition="left"
              placeholder="Between 6-25 chars"
              type="password"
              onChange={(e) => setAdmin({ ...admin, password_confirmation: e.target.value })}
            />
            <Button color="teal" fluid size="large" onClick={() => register(admin)}>
              Register Admin
            </Button>
          </Segment>
        </Form>

      </Grid.Column>
    </Grid>
  );
};

const mapState = (state) => ({
  adminStore: state.admin,
});


const actionCreators = {
  register: adminActions.register,
};

export default connect(mapState, actionCreators)(RegisterAdminPage);
