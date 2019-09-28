const io = require('socket.io-client');
const axios = require('axios');

const ioClient = io.connect('https://zrp-challenge-socket.herokuapp.com');

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

/**
 * Conversor of levels to use in api
 */
const levelMap = {
  "Wolf": "w",
  "Dragon": "s",
  "God": "g",
  "Tiger": "c"
};

/**
 * Convert received data from expected api data
 * @param object occurrence 
 */
const buildExpectedOccurrence = (occurrence) => {
  return {
    threat: {
      name: occurrence.monsterName,
      rank: levelMap[occurrence.dangerLevel],
      location_attributes: {
        latitude: occurrence.lat,
        longitude: occurrence.lng,
      }
    }
  }
}

ioClient.on('occurrence', (msg) => {
  console.info(`Receive: ${JSON.stringify(msg)}`);
  api.post('/threats', buildExpectedOccurrence(msg))
    .then(() => console.info('Successs!'))
    .catch((err) => console.info(`Error: ${err.response ? JSON.stringify(err.response.data) : null }`))
});