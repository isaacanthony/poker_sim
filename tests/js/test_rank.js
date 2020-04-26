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