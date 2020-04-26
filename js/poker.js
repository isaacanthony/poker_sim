'use strict';

let deck = new Deck();
let rank = new Rank();
let hand = new Hand(deck);
let simulation = new Simulation(deck, hand, rank);
simulation.run();
