/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Header, Icon } from 'semantic-ui-react';
import Location from './Location';

/**
 * To style card
 */
const colorByRank = (rank) => {
  const colors = {
    g: 'red',
    s: 'orange',
    c: 'yellow',
    w: 'olive',
  };
  return colors[rank];
};

const Result = ({ successful, finished }) => {
  if (!finished) {
    return (
      <Header as="h5">In progress...</Header>
    );
  }

  return (
    <Header as="h5" color={successful	? 'green' : 'red'}>
      {successful ? 'Won' : 'Defeat'}
    </Header>
  );
};

const HeroCard = ({ batle, detailed }) => (
  <Card color={colorByRank(batle.threat.rank)}>
    <Card.Content>
      <Card.Header>{batle.threat.name}</Card.Header>
      <Card.Meta>
        <Icon name="star" color={colorByRank(batle.threat.rank)} />
        <span className={`ui ${colorByRank(batle.threat.rank)} small header`}>
          {batle.threat.rank.toUpperCase()}
        </span>
      </Card.Meta>
      <Card.Description>
        <Header as="h4">
          {`${batle.heroes[0].name} `}
          {`(rank ${batle.heroes[0].rank.toUpperCase()}) `}
        </Header>
        { detailed ? <Result successful={batle.successful} finished={batle.finished} /> : null }
        <Location location={batle.threat.location} />
      </Card.Description>
    </Card.Content>
  </Card>
);

export default HeroCard;
