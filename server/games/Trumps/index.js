const Deck = require('../Deck');
const Player = require('../../util/Player');

class TrumpsGame {
    constructor(playerConfig){
        this.deck = new Deck();
        this.deck.shuffle();
        this.players = this.deck.dealHands(playerConfig.length, 7).map((hand, index)=>new Player(playerConfig[index].name, hand));
        this.poke = 0;
    }
    async playRound(){
        const playerOrderMap = this.players.map((_, index, arr)=>(index+this.poke)%arr.length);
        const cardsInPlay = await Promise.all(this.players.map(player=>player.selectCardFromHand()));
        const roundSuit = cardsInPlay[0].suit;
        const indexOfWinner = cardsInPlay.reduce((indexOfWinner, currentCard, currentIndex, cardsArray)=>{
            if(indexOfWinner === -1 ){
                return currentIndex;
            }
            const currentWinner = cardsArray[indexOfWinner];
            if(currentCard.suit === roundSuit && currentCard.rank > currentWinner.rank){
                return currentIndex;
            }
            return indexOfWinner;
        }, -1);
        const winningPlayerIndex = playerOrderMap[indexOfWinner];
        this.poke = winningPlayerIndex;
        this.players[winningPlayerIndex].score++;
        return {cardsInPlay, indexOfWinner};
    }
}
module.exports = TrumpsGame;

