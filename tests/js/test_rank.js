'use strict';

// Test cardValue()
assertEqual(Rank.cardValue('6S'), 6);
assertEqual(Rank.cardValue('10D'), 10);
assertEqual(Rank.cardValue('JH'), 11);
assertEqual(Rank.cardValue('QS'), 12);
assertEqual(Rank.cardValue('KD'), 13);
assertEqual(Rank.cardValue('AC'), 14);

// Test cardSuit()
assertEqual(Rank.cardSuit('2S'), 'S');
assertEqual(Rank.cardSuit('10D'), 'D');
assertEqual(Rank.cardSuit('AC'), 'C');

// Test pair()
assertEqual(Rank.pair(['8S', '7S', '6S', '5S', '4S']), []);

assertEqual(
  Rank.pair(['6H', '5H', '5S', '4H', '3S']),
  ['5H', '5S', '6H', '4H', '3S'],
);

assertEqual(
  Rank.pair(['AH', 'KH', 'JH', '2S', '2D']),
  ['2S', '2D', 'AH', 'KH', 'JH'],
)

// Test twoPair()
assertEqual(Rank.twoPair(['6S', '5H', '5S', '4S', '3S']), []);

assertEqual(
  Rank.twoPair(['QD', '7H', '7S', '2S', '2H']),
  ['7H', '7S', '2S', '2H', 'QD'],
);

assertEqual(
  Rank.twoPair(['QH', 'QD', 'JS', '2S', '2H']),
  ['QH', 'QD', '2S', '2H', 'JS'],
);

assertEqual(
  Rank.twoPair(['JH', 'JC', '6D', '6S', '4H']),
  ['JH', 'JC', '6D', '6S', '4H'],
);

// Test threeKind()
assertEqual(Rank.threeKind(['JH', 'JC', '6D', '6S', '4H']), []);

assertEqual(
  Rank.threeKind(['KC', 'JH', '4H', '4D', '4S']),
  ['4H', '4D', '4S', 'KC', 'JH'],
);

assertEqual(
  Rank.threeKind(['JC', '6D', '6S', '6H', '4H']),
  ['6D', '6S', '6H', 'JC', '4H'],
);

assertEqual(
  Rank.threeKind(['JS', 'JH', 'JC', '6D', '4H']),
  ['JS', 'JH', 'JC', '6D', '4H'],
);

// Test straight()
assertEqual(Rank.straight(['QD', 'JH', '10D', '9H', '7H']), []);

assertEqual(
  Rank.straight(['JD', '10H', '9D', '8H', '7H']),
  ['JD', '10H', '9D', '8H', '7H'],
);

assertEqual(
  Rank.straight(['AD', '5S', '4S', '3C', '2H']),
  ['5S', '4S', '3C', '2H', 'AD'],
);

// Test flush()
assertEqual(Rank.flush(['QH', 'JH', 'JS', '10H', '8H']), []);

assertEqual(
  Rank.flush(['KH', 'QH', 'JH', '10H', '8H']),
  ['KH', 'QH', 'JH', '10H', '8H'],
);

// Test fullHouse()
assertEqual(Rank.fullHouse(['QH', 'JH', '4S', '4C', '4D']), []);

assertEqual(
  Rank.fullHouse(['JH', 'JS', '4S', '4C', '4D']),
  ['4S', '4C', '4D', 'JH', 'JS'],
);

assertEqual(
  Rank.fullHouse(['JD', 'JH', 'JS', '4S', '4C']),
  ['JD', 'JH', 'JS', '4S', '4C'],
);

// Test fourKind()
assertEqual(Rank.fourKind(['5C', '4H', '3C', '3S', '3H']), []);

assertEqual(
  Rank.fourKind(['5H', '3S', '3H', '3C', '3D']),
  ['3S', '3H', '3C', '3D', '5H'],
);

assertEqual(
  Rank.fourKind(['5D', '5S', '5C', '5H', '3S']),
  ['5D', '5S', '5C', '5H', '3S'],
);

// Test straightFlush(): no straight, no flush
assertEqual(Rank.straightFlush(['QS', 'QD', 'JD', '9H', '8H']), []);

// Test straightFlush(): straight, no flush
assertEqual(
  Rank.straightFlush(['QS', 'JD', '10D', '9H', '8H']),
  [],
);

// Test straightFlush(): no straight, flush
assertEqual(
  Rank.straightFlush(['KH', 'QH', 'JH', '9H', '8H']),
  [],
);

// Test straightFlush()
assertEqual(
  Rank.straightFlush(['QH', 'JH', '10H', '9H', '8H']),
  ['QH', 'JH', '10H', '9H', '8H'],
);

// Test compareHands()
assertEqual(
  Rank.compareHands(['QH', 'JH', '10H', '9H', '8H'], ['JS', '8H', '5D', '3H', '2S']),
  -1,
);

assertEqual(
  Rank.compareHands(['JS', '8H', '5D', '3H', '2S'], ['QH', 'JH', '10H', '9H', '8H']),
  1,
);

assertEqual(
  Rank.compareHands(['KH', 'QH', 'JH', '10H', '9H'], ['QH', 'JH', '10H', '9H', '8H']),
  -1,
);

assertEqual(
  Rank.compareHands(['JH', '10H', '9H', '8H', '7H'], ['QH', 'JH', '10H', '9H', '8H']),
  1,
);

assertEqual(
  Rank.compareHands(['QH', 'JH', '10H', '9H', '8H'], ['QH', 'JH', '10H', '9H', '8H']),
  0,
);

// Test compareHands(): high card
assertEqual(
  Rank.compareHands(['AS', 'KS', 'JS', '7H', '2S'], ['JD', '9H', '5H', '4S', '3H']),
  -1,
)
