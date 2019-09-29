import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Menu,
  Container,
  Button,
} from 'semantic-ui-react';
import adminActions from '../actions/adminActions';
import history from '../helpers/history';

const paths = [
  { path: '/', name: 'Current battles' },
  { path: '/heroes', name: 'Heroes' },
  { path: '/newAdmin', name: 'Admin' },
  { path: '/allBatles', name: 'All Batles' },
];

const Heading = ({ logout }) => {
  const [pathname, setPathname] = useState(history.location.pathname);

  useEffect(() => {
    history.listen((location) => {
      setPathname(location.pathname);
    });
  }, []);

  return (
    <Menu
      size="large"
    >
      <Container>
        { paths.map((p) => (
          <Menu.Item
            as="a"
            active={pathname === p.path}
            onClick={() => history.push(p.path)}
          >
            {p.name}
          </Menu.Item>
        )) }
        <Menu.Item position="right">
          <Button as="a" style={{ marginLeft: '0.5em' }} onClick={() => logout()}>
            Logout
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

const actionCreators = {
  logout: adminActions.logout,
};

export default connect(null, actionCreators)(Heading);
