import React, { useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';

const RegisterAdminPage = () => {

  const [admin, setAdmin] = useState({});

  return (
    <Grid textAlign="center" style={{ height: '50vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Add new administrator
        </Header>
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
            <Button color="teal" fluid size="large" onClick={() => {}}>
              Register Admin
            </Button>
          </Segment>
        </Form>

      </Grid.Column>
    </Grid>
  );
};

export default RegisterAdminPage;