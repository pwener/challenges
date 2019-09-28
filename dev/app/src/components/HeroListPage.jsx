import React from 'react';
import {
  Grid,
  Container,
} from 'semantic-ui-react';
import HeroCard from './HeroCard';

const heroes = [
  {
    name: 'Saitama',
    rank: 'a',
    location: {
      longitude: 10,
      latitude: 10,
    },
  },
  {
    name: 'Goku',
    rank: 's',
    location: {
      longitude: 10,
      latitude: 10,
    },
  },
  {
    name: 'Vegeta',
    rank: 's',
    location: {
      longitude: 10,
      latitude: 10,
    },
  },
  {
    name: 'Jynx',
    rank: 'b',
    location: {
      longitude: 10,
      latitude: 10,
    },
  },
];

const heroes2 = [...heroes, ...heroes];

const convertToMatriz = (arr, order) => {
  const res = [];
  for (let x = 0; x < arr.length; x += order) {
    res.push(arr.slice(x, x + order));
  }
  return res;
};

const HeroListPage = () => {
  const cards = heroes2.map((h) => (
    <Grid.Column>
      <HeroCard hero={h} />
    </Grid.Column>
  ));

  const rowCol = convertToMatriz(cards, 6);

  return (
    <Container textAlign="center" style={{ marginBottom: '2vh' }}>
      <Grid columns={6}>
        { rowCol.map((r) => <Grid.Row>{ r }</Grid.Row>) }
      </Grid>
    </Container>
  );
};

export default HeroListPage;
