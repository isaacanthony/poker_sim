'use strict';

let rank = new Rank();

// Test cardValue()
assert(rank.cardValue('AC') === 'A', "rank.cardValue('AC')");
assert(rank.cardValue('10D') === '10', "rank.cardValue('10D')");
assert(rank.cardValue('2S') === '2', "rank.cardValue('2')");
