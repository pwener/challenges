/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import Location from './Location';

/**
 * To style card
 */
const colorByRank = (rank) => {
  const colors = {
    s: 'red',
    a: 'orange',
    b: 'yellow',
    c: 'olive',
  };
  return colors[rank];
};

const HeroCard = ({ hero }) => (
  <Card color={colorByRank(hero.rank)}>
    <Card.Content>
      <Card.Header>{hero.name}</Card.Header>
      <Card.Meta>
        <Icon name="lightning" />
        <span className={`ui ${colorByRank(hero.rank)} small header`}>{hero.rank.toUpperCase()}</span>
      </Card.Meta>
      <Card.Description>
        <Location location={hero.location} />
      </Card.Description>
    </Card.Content>
  </Card>
);

export default HeroCard;
