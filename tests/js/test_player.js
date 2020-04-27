'use strict';

let player = new Player(
  'p1',
  ['10H', 'JH', 'QH', 'KH', 'AH'],
  'AS',
  'AD',
);

// Test concats all cards
assertEqual(player.cards, ['10H', 'JH', 'QH', 'KH', 'AH', 'AS', 'AD']);

// Test combines all 7-choose-5 card combos into hands
assertEqual(player.hands.length, 21)

// Test best hand
assertEqual(
  player.bestHand,
  ['AH', 'KH', 'QH', 'JH', '10H'],
);
