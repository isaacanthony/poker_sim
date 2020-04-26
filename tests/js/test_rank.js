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

// Test pairValue()
assertEqual(rank.pairValue(['8S', '7S', '6S', '5S', '4S']), []);

assertEqual(
  rank.pairValue(['6H', '5H', '5S', '4H', '3S']),
  ['5H', '5S', '6H', '4H', '3S'],
);

assertEqual(
  rank.pairValue(['AH', 'KH', 'JH', '2S', '2D']),
  ['2S', '2D', 'AH', 'KH', 'JH'],
)

// Test twoPairValue()
assertEqual(rank.twoPairValue(['6S', '5H', '5S', '4S', '3S']), []);

assertEqual(
  rank.twoPairValue(['QD', '7H', '7S', '2S', '2H']),
  ['7H', '7S', '2S', '2H', 'QD'],
);

assertEqual(
  rank.twoPairValue(['QH', 'QD', 'JS', '2S', '2H']),
  ['QH', 'QD', '2S', '2H', 'JS'],
);

assertEqual(
  rank.twoPairValue(['JH', 'JC', '6D', '6S', '4H']),
  ['JH', 'JC', '6D', '6S', '4H'],
);

// Test threeKindValue()
assertEqual(rank.threeKindValue(['JH', 'JC', '6D', '6S', '4H']), []);

assertEqual(
  rank.threeKindValue(['KC', 'JH', '4H', '4D', '4S']),
  ['4H', '4D', '4S', 'KC', 'JH'],
);

assertEqual(
  rank.threeKindValue(['JC', '6D', '6S', '6H', '4H']),
  ['6D', '6S', '6H', 'JC', '4H'],
);

assertEqual(
  rank.threeKindValue(['JS', 'JH', 'JC', '6D', '4H']),
  ['JS', 'JH', 'JC', '6D', '4H'],
);

// Test straightValue()
assertEqual(rank.straightValue(['7H', '9H', '10D', 'JH', 'QD']), []);
// assertEqual(rank.straightValue(['7H', '8H', '9D', '10H', 'JD']) === 7 + 8 + 9 + 10 + 11);
// assertEqual(rank.straightValue(['2H', '3C', '4S', '5S', 'AD']) === 1 + 2 + 3 + 4 + 5);

// Test flushValue()
assertEqual(rank.flushValue(['8H', '10H', 'JS', 'JH', 'QH']), []);
// assertEqual(rank.flushValue(['8H', '10H', 'JH', 'QH', 'KH']) === 8 + 10 + 11 + 12 + 13);

// Test fullHouseValue()
assertEqual(rank.fullHouseValue(['4S', '4C', '4D', 'JH', 'QH']), []);
// assertEqual(rank.fullHouseValue(['4S', '4C', '4D', 'JH', 'JS']) === 4 + 4 + 4 + 11 + 11);
// assertEqual(rank.fullHouseValue(['4S', '4C', 'JD', 'JH', 'JS']) === 4 + 4 + 11 + 11 + 11);

// Test fourKindValue()
assertEqual(rank.fourKindValue(['5C', '4H', '3C', '3S', '3H']), []);
// assertEqual(rank.fourKindValue(['3S', '3H', '3C', '3D', '5H']) === 3 + 3 + 3 + 3 + 5);
// assertEqual(rank.fourKindValue(['3S', '5D', '5S', '5C', '5H']) === 3 + 5 + 5 + 5 + 5);

// Test straightFlushValue()
assertEqual(rank.straightFlushValue(['QS', 'QD', 'JD', '9H', '8H']), []); // no straight, no flush
// assertEqual(rank.straightFlushValue(['8H', '9H', '10D', 'JD', 'QS']).length === 0); // straight, no flush
// assertEqual(rank.straightFlushValue(['8H', '9H', 'JH', 'QH', 'KH']).length === 0); // no straight, flush

// assertEqual(
//   rank.straightFlushValue(['QH', 'JH', '10H', '9H', '8H']),
//   ['QH', 'JH', '10H', '9H', '8H'],
// );

// Test compareHands(): straight flush
// assertEqual(
//   rank.compareHands(['QH', 'JH', '10H', '9H', '8H'], ['JS', '8H', '5D', '3H', '2S']),
//   -1,
// );
//
// assertEqual(
//   rank.compareHands(['2S', '3H', '5D', '8H', 'JS'], ['8H', '9H', '10H', 'JH', 'QH']),
//   1,
// );
//
// assertEqual(
//   rank.compareHands(['9H', '10H', 'JH', 'QH', 'KH'], ['8H', '9H', '10H', 'JH', 'QH']),
//   -1,
// );
//
// assertEqual(
//   rank.compareHands(['7H', '8H', '9H', '10H', 'JH'], ['8H', '9H', '10H', 'JH', 'QH']),
//   1,
// );
