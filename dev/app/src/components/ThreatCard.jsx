import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ThreatCard = ({ threat }) => (
  <Card>
    <Card.Content>
      <Image
        floated="right"
        size="mini"
        src="/images/avatar/large/steve.jpg"
      />
      <Card.Header>{threat.monsterName}</Card.Header>
      <Card.Meta>{threat.location}</Card.Meta>
      <Card.Description>
      </Card.Description>
    </Card.Content>
  </Card>
);

export default ThreatCard;