import React from 'react';
import { connect } from 'react-redux';
import {
  Menu,
  Container,
  Button,
} from "semantic-ui-react";
import { adminActions } from '../actions/adminActions';

const Heading = ({ logout }) => (
  <Menu
    size='large'
  >
    <Container>
      <Menu.Item as='a' active>
        Home
      </Menu.Item>
      <Menu.Item as='a'>Heroes</Menu.Item>
      <Menu.Item as='a'>Admin</Menu.Item>
      <Menu.Item position='right'>
        <Button as='a' style={{ marginLeft: '0.5em' }} onClick={() => logout()}>
          Logout
        </Button>
      </Menu.Item>
    </Container>
  </Menu>
);

const actionCreators = {
  logout: adminActions.logout
};

export default connect(null, actionCreators)(Heading);