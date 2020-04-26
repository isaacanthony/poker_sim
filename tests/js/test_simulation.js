'use strict';

let deck = new Deck();
let hand = new Hand(deck);
let simulation = new Simulation(deck, hand, rank);

hand.updateCard('card1', 'AD');
hand.updateCard('card2', 'AS');
hand.fold('p2');

let results = simulation.run();

// Test discarded one card
assert(results['cards'].length === 50);
assert(!results['cards'].includes('AD'));
assert(!results['cards'].includes('AS'));

// Test only dealt cards to 6 players
assert(Object.keys(results['players']).length === 6);
assert(!Object.keys(results['players']).includes('p2'));

// Test dealt two cards to each player
assert(
  JSON.stringify(Object.values(results['players']).map((cards) => cards.length)) ===
    JSON.stringify([2, 2, 2, 2, 2, 2])
);
