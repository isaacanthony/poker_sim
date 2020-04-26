'use strict';

let rank = new Rank();

// Test cardValue()
console.assert(rank.cardValue('AC') === 'A');
console.assert(rank.cardValue('10D') === '10');
console.assert(rank.cardValue('2S') === '2');

// Test cardNumericValue()
console.assert(rank.cardNumericValue('AC') === 14);
console.assert(rank.cardNumericValue('KD') === 13);
console.assert(rank.cardNumericValue('QS') === 12);
console.assert(rank.cardNumericValue('JH') === 11);
console.assert(rank.cardNumericValue('10D') === 10);
console.assert(rank.cardNumericValue('6S') === 6);

// Test cardSuit()
console.assert(rank.cardSuit('AC') === 'C');
console.assert(rank.cardSuit('10D') === 'D');
console.assert(rank.cardSuit('2S') === 'S');
