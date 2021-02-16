class Player {
    constructor(name, hand=[]){
        this.hand = hand;
        this.score = 0;
        this.name = name;
    }
    playCardFromHand(indexOfCardToPlay=0){
        if( indexOfCardToPlay < 0 || indexOfCardToPlay > this.hand.length ){
            throw new Error(`Cannot play card with index ${indexOfCardToPlay}`);
        }
        const [ cardToPlay ] = this.hand.splice(indexOfCardToPlay, 1);
        return cardToPlay;
    }
    selectCardFromHand(){
        return Promise.resolve(this.playCardFromHand());
    }
    remainingCardsCount(){
        return this.hand.length;
    }
}
module.exports = Player;