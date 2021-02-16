const {uuidv4 : uuid} = require('uuid');
const createGame = (userId, gameType) => {
    const gameId = uuid();
    return gameId;
}
module.exports = createGame;
