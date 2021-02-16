class Card {
    constructor(suit=0,rank=0){
        this.suit = suit;
        this.rank = rank;
    }
    enum( trump = -1 ){
        return this.suit === trump ? 4 * 13 + this.rank : this.suit * 13 + this.rank;
    }
    mapSuit(suitMap={}){
        return suitMap[this.suit];
    }
    mapRank(rankMap={}){
        return rankMap[this.rank];
    }
    map(suitMap, rankMap){
        return {suit : this.mapSuit(suitMap), rank : this.mapRank(rankMap)}
    }
}
module.exports = Card;