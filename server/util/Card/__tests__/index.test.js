const Card = require('../index');

test('It creates a card', ()=>{
    const TestCard = new Card(0,0);
    expect(TestCard.suit).toEqual(0);
    expect(TestCard.rank).toEqual(0);
});
test('Card methods work as expected',()=>{
    const TestRankMap = ['TestRank'];
    const TestSuitMap = ['TestSuit'];
    const TestCard = new Card(0,0);
    expect(TestCard.enum()).toEqual(0);
    expect(TestCard.mapRank(TestRankMap)).toEqual(TestRankMap[0]);
    expect(TestCard.mapSuit(TestSuitMap)).toEqual(TestSuitMap[0]);
});