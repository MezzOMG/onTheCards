const Player = require('../index');
const Deck = require('../../Deck');
const Card = require('../../Card');

let testDeck;
beforeEach(()=>{
    testDeck = new Deck();
})
test('It creates a player correctly', ()=>{
    const testHand = testDeck.dealCards(7);
    const testPlayer = new Player('TestPlayer', testHand);
    expect(testPlayer.name).toEqual('TestPlayer');
    expect(testPlayer.hand).toHaveLength(7);
});
test('It plays a card from the hand', async()=>{
    const testHand = testDeck.dealCards(7);
    const testPlayer = new Player('TestPlayer', testHand);
    const result = await testPlayer.selectCardFromHand();
    expect(result).toBeInstanceOf(Card);
    expect(result.enum()).toEqual(0);
    expect(testPlayer.remainingCardsCount()).toEqual(6);
});