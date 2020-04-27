'use strict';

let deck = new Deck();
let hand = new Hand(deck);
let simulation = new Simulation(deck, hand);

hand.updateCard('card1', 'AD');
hand.updateCard('card2', 'AS');
hand.fold('p2');

let results = simulation.run();

// Test discarded one card
assertEqual(results['cards'].length, 50);
assertEqual(results['cards'].includes('AD'), false);
assertEqual(results['cards'].includes('AS'), false);

// Test only dealt cards to 6 players
assertEqual(Object.keys(results['players']).length, 7);
assertEqual(Object.keys(results['players']).includes('p2'), false);

// Test dealt two cards to each player
// assertEqual(
//   Object.values(results['players']).map((cards) => cards.length),
//   [2, 2, 2, 2, 2, 2],
// );

// console.log(results);
