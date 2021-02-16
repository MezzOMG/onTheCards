const { test, expect } = require('@jest/globals');
const Deck = require('../index');

test('Deck is created successfully (default maps)', ()=>{
    const testDeck = new Deck();
    expect(testDeck.size).toEqual(13 * 4);
    expect(testDeck.cards[0].enum()).toEqual(0);
    expect(testDeck.cards[testDeck.size - 1].enum()).toEqual(51);
});

test('Deck can deal a hand of cards', ()=>{
    const testDeck = new Deck();
    const testHand = testDeck.dealCards(5);
    expect(testHand).toHaveLength(5);
    expect(testDeck.size).toEqual(47);
});

test('Deck can deal multiple hands of cards', ()=>{
    const testDeck = new Deck();
    const testHands = testDeck.dealHands(2, 7);
    expect(testHands).toHaveLength(2);
    expect(testHands[0]).toHaveLength(7);
    expect(testDeck.size).toEqual(38);
});

test('Deck can be shuffled', ()=>{
    const testDeck = new Deck();
    expect(testDeck.shuffle()).toBeTruthy();
});