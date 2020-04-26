'use strict';

let rank = new Rank();

// Test cardValue()
assert(rank.cardValue('6S') === 6);
assert(rank.cardValue('10D') === 10);
assert(rank.cardValue('JH') === 11);
assert(rank.cardValue('QS') === 12);
assert(rank.cardValue('KD') === 13);
assert(rank.cardValue('AC') === 14);

// Test cardSuit()
assert(rank.cardSuit('2S') === 'S');
assert(rank.cardSuit('10D') === 'D');
assert(rank.cardSuit('AC') === 'C');

// Test highCardValue()
assert(rank.highCardValue(['10D', 'JH', 'QS', 'KH', 'AS']) === 14 + 13 + 12 + 11 + 10);
assert(rank.highCardValue(['3H', '4S', '6H', '10D', 'JD']) === 3 + 4 + 6 + 10 + 11);

// Test pairValue()
assert(rank.pairValue(['4S', '5S', '6S', '7S', '8S']) === 0);
assert(rank.pairValue(['3S', '4H', '5S', '5H', '6H']) === 5 + 5);

// Test twoPairValue()
assert(rank.twoPairValue(['3S', '4S', '5S', '5H', '6S']) === 0);
assert(rank.twoPairValue(['2S', '2H', '7S', '7H', 'QD']) === 2 + 2 + 7 + 7);
assert(rank.twoPairValue(['2S', '2H', 'JS', 'QH', 'QD']) === 2 + 2 + 12 + 12);
assert(rank.twoPairValue(['4H', '6D', '6S', 'JH', 'JC']) === 6 + 6 + 11 + 11);

// Test threeKindValue()
assert(rank.threeKindValue(['4H', '6D', '6S', 'JH', 'JC']) === 0);
assert(rank.threeKindValue(['4H', '4D', '4S', 'JH', 'JC']) === 4 + 4 + 4);
assert(rank.threeKindValue(['4H', '6D', '6S', '6H', 'JC']) === 6 + 6 + 6);
assert(rank.threeKindValue(['4H', '6D', 'JS', 'JH', 'JC']) === 11 + 11 + 11);

// Test straightValue()
assert(rank.straightValue(['7H', '9H', '10D', 'JH', 'QD']) === 0);
assert(rank.straightValue(['7H', '8H', '9D', '10H', 'JD']) === 7 + 8 + 9 + 10 + 11);
assert(rank.straightValue(['2H', '3C', '4S', '5S', 'AD']) === 1 + 2 + 3 + 4 + 5);

// Test flushValue()
assert(rank.flushValue(['8H', '10H', 'JS', 'JH', 'QH']) === 0);
assert(rank.flushValue(['8H', '10H', 'JH', 'QH', 'KH']) === 8 + 10 + 11 + 12 + 13);

// Test fullHouseValue()
assert(rank.fullHouseValue(['4S', '4C', '4D', 'JH', 'QH']) === 0);
assert(rank.fullHouseValue(['4S', '4C', '4D', 'JH', 'JS']) === 4 + 4 + 4 + 11 + 11);
assert(rank.fullHouseValue(['4S', '4C', 'JD', 'JH', 'JS']) === 4 + 4 + 11 + 11 + 11);

// Test fourKindValue()
assert(rank.fourKindValue(['3S', '3H', '3C', '4H', '5H']) === 0);
assert(rank.fourKindValue(['3S', '3H', '3C', '3D', '5H']) === 3 + 3 + 3 + 3 + 5);
assert(rank.fourKindValue(['3S', '5D', '5S', '5C', '5H']) === 3 + 5 + 5 + 5 + 5);

// Test straightFlushValue()
assert(rank.straightFlushValue(['8H', '9H', 'JD', 'QD', 'QS']).length === 0); // no straight, no flush
assert(rank.straightFlushValue(['8H', '9H', '10D', 'JD', 'QS']).length === 0); // straight, no flush
assert(rank.straightFlushValue(['8H', '9H', 'JH', 'QH', 'KH']).length === 0); // no straight, flush

assert(
  JSON.stringify(rank.straightFlushValue(['8H', '9H', '10H', 'JH', 'QH'])) ===
    JSON.stringify(['QH', 'JH', '10H', '9H', '8H'])
);

// Test compareHands(): straight flush
assert(
  rank.compareHands(['8H', '9H', '10H', 'JH', 'QH'], ['2S', '3H', '5D', '8H', 'JS']) === -1
);

assert(
  rank.compareHands(['2S', '3H', '5D', '8H', 'JS'], ['8H', '9H', '10H', 'JH', 'QH']) === 1
);

assert(
  rank.compareHands(['9H', '10H', 'JH', 'QH', 'KH'], ['8H', '9H', '10H', 'JH', 'QH']) === -1
);

assert(
  rank.compareHands(['7H', '8H', '9H', '10H', 'JH'], ['8H', '9H', '10H', 'JH', 'QH']) === 1
);
