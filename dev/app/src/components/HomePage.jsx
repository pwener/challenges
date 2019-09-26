import React from 'react';
import {
  Card,
  Container,
} from "semantic-ui-react";
import ThreatCard from './ThreatCard';

const generateLoc = () => "lat: -5.836597, lng: -35.236007"

const monsters = [
  { location: generateLoc(), dangerLevel: 'S', monsterName: 'Silver Dragon' },
  { location: generateLoc(), dangerLevel: 'G', monsterName: 'Black Dragon' },
  { location: generateLoc(), dangerLevel: 'C', monsterName: 'Giant Mamba' },
  { location: generateLoc(), dangerLevel: 'W', monsterName: 'Meteour' },
  { location: generateLoc(), dangerLevel: 'G', monsterName: 'Zombies' },
];

const HomePage = (props) => (
  <Container textAlign="center">
    <Card.Group centered>
      { monsters.map((m, i) => <ThreatCard threat={m} /> ) }
    </Card.Group>
  </Container>
);

export default HomePage;