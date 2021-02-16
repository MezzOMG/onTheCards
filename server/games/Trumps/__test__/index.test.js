const TrumpsGame = require('../index');

function setupPlayers(numberOfPlayers=4){
    const players = [];
    for( let i=1; i<=numberOfPlayers; i++){
        players.push({name:`Player ${i}`});
    }
    return players;
}
test('Game setup', ()=>{
    const game = new TrumpsGame(setupPlayers());
    expect(game.players).toHaveLength(4);
});
test('Plays a round', async()=>{
    const game = new TrumpsGame(setupPlayers());
    const roundResult = await game.playRound();
    expect(roundResult.cardsInPlay).toHaveLength(game.players.length);
    expect(roundResult.indexOfWinner<game.players.length).toEqual(true);
    expect(roundResult.indexOfWinner>=0).toEqual(true);
    expect(game.players.filter(player=>player.score > 0)).toHaveLength(1);
});
