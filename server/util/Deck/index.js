const Card = require('../Card');
const defaultRankMap = require('../constants/defaultRankMap');
const defaultSuitMap = require('../constants/defaultSuitMap');

class Deck {
    constructor(suitMap=defaultSuitMap, rankMap=defaultRankMap, numberOfDecks=1){
        this.cards = [];
        for(let i=0; i<numberOfDecks; i++ ){
            this.cards = [
                ...this.cards,
                ...suitMap.reduce((cards,_,suitIndex)=>{
                    return [ ...cards, ...rankMap.map((_, rankIndex)=>new Card(suitIndex, rankIndex)) ];
                }, [])
            ];
        }
        this.size = this.cards.length;
    }
    shuffle(){
        this.cards = shuffle([...this.cards]);
        return true;
    }
    dealCards(numberOfCardsToDeal=1){
        if(numberOfCardsToDeal > this.cards.length ){
            throw new Error(`Deck size (${this.cards.length}) is not large enough to deal ${numberOfCardsToDeal} cards`);
        }
        const handToReturn = this.cards.splice(0, numberOfCardsToDeal);
        this.size = this.cards.length;
        return handToReturn;
    }
    dealHands(numberOfHands=1, sizeOfHands=7){
        if(numberOfHands * sizeOfHands > this.cards.length ){
            throw new Error(`Deck size (${this.cards.length}) is not large enough to deal ${numberOfHands} hands of ${sizeOfHands} cards`);
        }
        const hands = [];
        for(let i=0; i<numberOfHands; i++){
            hands.push(this.dealCards(sizeOfHands));
        }
        return hands;
    }
}
module.exports = Deck;

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}