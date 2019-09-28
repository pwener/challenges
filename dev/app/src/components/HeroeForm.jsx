/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Form,
  Modal,
  Button,
  Select,
  Message,
  Divider,
  Header,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import heroActions from '../actions/heroActions';

const rankOptions = [
  { key: 's', value: 's', text: 'S' },
  { key: 'a', value: 'a', text: 'A' },
  { key: 'b', value: 'b', text: 'B' },
  { key: 'c', value: 'c', text: 'C' },
];

const HeroeForm = ({ errors, addHero }) => {
  const [hero, setHero] = useState({});
  const [location, setLocation] = useState({});

  return (
    <Modal
      size="mini"
      trigger={<Button icon="add" />}
    >
      <Modal.Header>Add new hero</Modal.Header>
      <Modal.Content>
        { errors && errors.length > 0 ? (
          <Message
            error
            header="Some mistakes in creating heroes"
            list={errors}
          />
        ) : null}
        <Form>
          <Form.Input
            label="Name"
            placeholder="Unique and heroic"
            onChange={(e) => setHero({ ...hero, name: e.target.value })}
          />
          <Select
            placeholder="Select rank"
            options={rankOptions}
            onChange={(_, v) => setHero({ ...hero, rank: v.value })}
          />
          <Divider />
          <Header as="h3">Location</Header>
          <Form.Group unstackable widths={2}>
            <Form.Input
              label="Latitude"
              placeholder="with 6 digits of precision"
              onChange={(e) => setLocation({ ...location, latitude: e.target.value })}
            />
            <Form.Input
              label="Longitude"
              placeholder="with 6 digits of precision"
              onChange={(e) => setLocation({ ...location, longitude: e.target.value })}
            />
          </Form.Group>
        </Form>
        <Button
          fluid
          color="blue"
          size="large"
          onClick={() => {
            addHero(hero, location);
          }}
        >
          Submit
        </Button>
      </Modal.Content>
    </Modal>
  );
};

const mapState = (state) => ({
  errors: state.hero.errors,
});

const actionCreators = {
  addHero: heroActions.add,
};

export default connect(mapState, actionCreators)(HeroeForm);
