import React, { useEffect, useState } from 'react';
import {
  Grid,
  Header,
  Container,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import heroActions from '../actions/heroActions';
import HeroCard from './HeroCard';
import HeroeForm from './HeroeForm';

const ROW_SIZE = 5;

/**
 * Just to facilitate grid render
 */
const convertToMatriz = (arr, order) => {
  const res = [];
  for (let x = 0; x < arr.length; x += order) {
    res.push(arr.slice(x, x + order));
  }
  return res;
};

const HeroListPage = ({ heroes, loadHeroes }) => {

  useEffect(() => loadHeroes(), []);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (heroes) {
      const listed = heroes.map((h) => (
        <Grid.Column>
          <HeroCard hero={h} />
        </Grid.Column>
      ));
      const rowCol = convertToMatriz(listed, ROW_SIZE);
      setCards(rowCol);
    }
  }, [heroes]);


  return (
    <Container textAlign="center" style={{ marginBottom: '2vh' }}>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h1" floated="left">All Heroes</Header>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <HeroeForm />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={ROW_SIZE}>
        { cards.map((r) => <Grid.Row>{ r }</Grid.Row>) }
      </Grid>
    </Container>
  );
};

const mapState = (state) => ({
  heroes: state.hero.heroes,
});

const actionCreators = {
  loadHeroes: heroActions.fetch,
};

export default connect(mapState, actionCreators)(HeroListPage);
