import React, { useState } from 'react';
import {
  Form,
  Modal,
  Button,
  Select,
  Divider,
  Header,
} from 'semantic-ui-react';

const rankOptions = [
  { key: 's', value: 's', text: 'S' },
  { key: 'a', value: 'a', text: 'A' },
  { key: 'b', value: 'b', text: 'B' },
  { key: 'c', value: 'c', text: 'C' },
];

const HeroeForm = () => {
  const [hero, setHero] = useState({});
  const [location, setLocation] = useState({});

  return (
    <Modal size="mini" trigger={<Button icon="add" />}>
      <Modal.Header>Add new hero</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label="Name"
            placeholder="Unique and heroic"
            onChange={(e) => setHero({ ...hero, name: e.target.value })}
          />
          <Select
            placeholder="Select rank"
            options={rankOptions}
            onChange={(e) => setHero({ ...hero, rank: e.target.value })}
          />
          <Divider />
          <Header as="h3">Location</Header>
          <Form.Group unstackable widths={2}>
            <Form.Input
              label="Latitude"
              placeholder="with 6 of precision"
              onChange={(e) => setLocation({ ...location, latitude: e.target.value })}
            />
            <Form.Input
              label="Longitude"
              placeholder="with 6 of precision"
              onChange={(e) => setLocation({ ...location, longitude: e.target.value })}
            />
          </Form.Group>
        </Form>
        <Button color="blue" fluid size="large">
          Submit
        </Button>
      </Modal.Content>
    </Modal>
  );
};

export default HeroeForm;
