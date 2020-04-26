'use strict';

let player = new Player(
  ['10H', 'JH', 'QH', 'KH', 'AH'],
  'AS',
  'AD',
);

// Test concats all cards
assert(
  JSON.stringify(player.cards) ===
    JSON.stringify(['10H', 'JH', 'QH', 'KH', 'AH', 'AS', 'AD'])
);

// Test combines all 7-choose-5 card combos into hands
assert(player.hands.length === 21)

console.log(player.hands);
