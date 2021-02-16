const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const router = require('./routes');

app.use(router);

app.get('/', (req, res)=>{
    res.send('hello world!');
});

app.post('/createGame', (req, res)=>{
    const {userId, gameType} = req;
    const gameId = createGame(userId, gameType);
    res.send(gameId);
});

io.on('connection', (socket)=>{
    console.log('a user connected');
});

io.on('disconnect', ()=>{
    console.log('disconnect');
});