'use strict';

let rank = new Rank();

// Test cardValue()
assertEqual(rank.cardValue('6S'), 6);
assertEqual(rank.cardValue('10D'), 10);
assertEqual(rank.cardValue('JH'), 11);
assertEqual(rank.cardValue('QS'), 12);
assertEqual(rank.cardValue('KD'), 13);
assertEqual(rank.cardValue('AC'), 14);

// Test cardSuit()
assertEqual(rank.cardSuit('2S'), 'S');
assertEqual(rank.cardSuit('10D'), 'D');
assertEqual(rank.cardSuit('AC'), 'C');

// Test pair()
assertEqual(rank.pair(['8S', '7S', '6S', '5S', '4S']), []);

assertEqual(
  rank.pair(['6H', '5H', '5S', '4H', '3S']),
  ['5H', '5S', '6H', '4H', '3S'],
);

assertEqual(
  rank.pair(['AH', 'KH', 'JH', '2S', '2D']),
  ['2S', '2D', 'AH', 'KH', 'JH'],
)

// Test twoPair()
assertEqual(rank.twoPair(['6S', '5H', '5S', '4S', '3S']), []);

assertEqual(
  rank.twoPair(['QD', '7H', '7S', '2S', '2H']),
  ['7H', '7S', '2S', '2H', 'QD'],
);

assertEqual(
  rank.twoPair(['QH', 'QD', 'JS', '2S', '2H']),
  ['QH', 'QD', '2S', '2H', 'JS'],
);

assertEqual(
  rank.twoPair(['JH', 'JC', '6D', '6S', '4H']),
  ['JH', 'JC', '6D', '6S', '4H'],
);

// Test threeKind()
assertEqual(rank.threeKind(['JH', 'JC', '6D', '6S', '4H']), []);

assertEqual(
  rank.threeKind(['KC', 'JH', '4H', '4D', '4S']),
  ['4H', '4D', '4S', 'KC', 'JH'],
);

assertEqual(
  rank.threeKind(['JC', '6D', '6S', '6H', '4H']),
  ['6D', '6S', '6H', 'JC', '4H'],
);

assertEqual(
  rank.threeKind(['JS', 'JH', 'JC', '6D', '4H']),
  ['JS', 'JH', 'JC', '6D', '4H'],
);

// Test straight()
assertEqual(rank.straight(['QD', 'JH', '10D', '9H', '7H']), []);

assertEqual(
  rank.straight(['JD', '10H', '9D', '8H', '7H']),
  ['JD', '10H', '9D', '8H', '7H'],
);

assertEqual(
  rank.straight(['AD', '5S', '4S', '3C', '2H']),
  ['5S', '4S', '3C', '2H', 'AD'],
);

// Test flush()
assertEqual(rank.flush(['QH', 'JH', 'JS', '10H', '8H']), []);

assertEqual(
  rank.flush(['KH', 'QH', 'JH', '10H', '8H']),
  ['KH', 'QH', 'JH', '10H', '8H'],
);

// Test fullHouse()
assertEqual(rank.fullHouse(['QH', 'JH', '4S', '4C', '4D']), []);

assertEqual(
  rank.fullHouse(['JH', 'JS', '4S', '4C', '4D']),
  ['4S', '4C', '4D', 'JH', 'JS'],
);

assertEqual(
  rank.fullHouse(['JD', 'JH', 'JS', '4S', '4C']),
  ['JD', 'JH', 'JS', '4S', '4C'],
);

// Test fourKind()
assertEqual(rank.fourKind(['5C', '4H', '3C', '3S', '3H']), []);

assertEqual(
  rank.fourKind(['5H', '3S', '3H', '3C', '3D']),
  ['3S', '3H', '3C', '3D', '5H'],
);

assertEqual(
  rank.fourKind(['5D', '5S', '5C', '5H', '3S']),
  ['5D', '5S', '5C', '5H', '3S'],
);

// Test straightFlush(): no straight, no flush
assertEqual(rank.straightFlush(['QS', 'QD', 'JD', '9H', '8H']), []);

// Test straightFlush(): straight, no flush
assertEqual(
  rank.straightFlush(['QS', 'JD', '10D', '9H', '8H']),
  [],
);

// Test straightFlush(): no straight, flush
assertEqual(
  rank.straightFlush(['KH', 'QH', 'JH', '9H', '8H']),
  [],
);

// Test straightFlush()
assertEqual(
  rank.straightFlush(['QH', 'JH', '10H', '9H', '8H']),
  ['QH', 'JH', '10H', '9H', '8H'],
);

// Test compareHands(): straight flush
assertEqual(
  rank.compareHands(['QH', 'JH', '10H', '9H', '8H'], ['JS', '8H', '5D', '3H', '2S']),
  -1,
);

assertEqual(
  rank.compareHands(['JS', '8H', '5D', '3H', '2S'], ['QH', 'JH', '10H', '9H', '8H']),
  1,
);

assertEqual(
  rank.compareHands(['KH', 'QH', 'JH', '10H', '9H'], ['QH', 'JH', '10H', '9H', '8H']),
  -1,
);

assertEqual(
  rank.compareHands(['JH', '10H', '9H', '8H', '7H'], ['QH', 'JH', '10H', '9H', '8H']),
  1,
);
