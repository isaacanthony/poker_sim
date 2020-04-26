'use strict';

let Simulation = class {
  constructor(hand, rank) {
    this.hand = hand;
    this.rank = rank;
  }

  run() {
    let sample = ['10C', '10H', '10D', '10S', 'AS'];
    console.log('Rank', this.rank.getScore(sample));
  }
}
