/**
 * List of all batles right now
 */
import React, { useEffect, useState } from 'react';
import {
  Grid,
  Header,
  Container,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import batleActions from '../actions/batleActions';
import BatleCard from './BatleCard';

const ROW_SIZE = 4;

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

const BatleListPage = ({ batles, loadBatles }) => {

  useEffect(() => {
    loadBatles();
  }, []);

  const [cards, setBatles] = useState([]);

  useEffect(() => {
    if (batles) {
      const listed = batles.map((b) => (
        <Grid.Column>
          <BatleCard batle={b} detailed />
        </Grid.Column>
      ));
      const rowCol = convertToMatriz(listed, ROW_SIZE);
      setBatles(rowCol);
    }
  }, [batles]);


  return batles.length > 0 ? (
    <Container textAlign="center" style={{ marginBottom: '2vh' }}>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as="h1" floated="left">All battles</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={ROW_SIZE}>
        { cards.map((r) => <Grid.Row>{ r }</Grid.Row>) }
      </Grid>
    </Container>
  ) : (
    <Container textAlign="center" style={{ marginTop: '10vh' }}>
      <Header as="h1">No battles yet...</Header>
    </Container>
  );
};

const mapState = (state) => ({
  batles: state.batle.batles,
});

const actionCreators = {
  loadBatles: batleActions.fetch,
};

export default connect(mapState, actionCreators)(BatleListPage);
