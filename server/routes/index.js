const express = require('express');
const createGame = require('./createGame');
const router = express.Router();

router.post('/createGame', (req, res)=>{
    const {userId, gameType} = req;
    const gameId = createGame(userId, gameType);
    res.send(gameId);
});

module.exports = router;