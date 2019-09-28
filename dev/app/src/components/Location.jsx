/* eslint-disable react/prop-types */
import React from 'react';
import { Icon } from 'semantic-ui-react';

const Location = ({ location }) => (
  <>
    <Icon name="globe" />
    { location ? `(${location.latitude}, ${location.longitude})` : '404' }
  </>
);

export default Location;
