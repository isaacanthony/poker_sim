'use strict';

let player = new Player(
  ['10H', 'JH', 'QH', 'KH', 'AH'],
  'AS',
  'AD',
);

// Test concats all cards
assertEqual(player.cards, ['10H', 'JH', 'QH', 'KH', 'AH', 'AS', 'AD']);

// Test combines all 7-choose-5 card combos into hands
assertEqual(player.hands.length, 21)

console.log(player.bestHand());
