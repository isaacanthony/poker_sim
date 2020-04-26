'use strict';

let Rank = class {
  constructor() {}

  compareHands(h1, h2) {
    let diff = 0;

    // Straight flush
    diff = this.compareHand(this.straightFlushValue(h1), this.straightFlushValue(h2));
    if (diff) return diff;

    return diff;
  }

  compareHand(h1, h2) {
    if (h1.length && !h2.length) return -1;
    if (!h1.length && h2.length) return 1;

    for (let i = 0; i < 4; i++) {
      if (this.cardValue(h1[i]) > this.cardValue(h2[i])) return -1;
      if (this.cardValue(h1[i]) < this.cardValue(h2[i])) return 1;
    }

    return 0;
  }

  cardValue(c) {
    let cValue = c.slice(0, -1);
    return {'J': 11, 'Q': 12, 'K': 13, 'A': 14}[cValue] || cValue * 1;
  }

  cardSuit(c) {
    return c.slice(-1);
  }

  highCardValue(h) {
    return h.reduce((total, c) => { return total + this.cardValue(c); }, 0);
  }

  pairValue(h) {
    for (let i = 0; i < 4; i++) {
      if (this.cardValue(h[i]) === this.cardValue(h[i + 1]))
        return 2 * this.cardValue(h[i]);
    }

    return 0;
  }

  twoPairValue(h) {
    if (this.cardValue(h[0]) === this.cardValue(h[1]) &&
      this.cardValue(h[2]) === this.cardValue(h[3]))
      return (2 * this.cardValue(h[0])) + (2 * this.cardValue(h[2]));

    if (this.cardValue(h[0]) === this.cardValue(h[1]) &&
      this.cardValue(h[3]) === this.cardValue(h[4]))
      return (2 * this.cardValue(h[0])) + (2 * this.cardValue(h[3]));

    if (this.cardValue(h[1]) === this.cardValue(h[2]) &&
      this.cardValue(h[3]) === this.cardValue(h[4]))
      return (2 * this.cardValue(h[1])) + (2 * this.cardValue(h[3]));

    return 0;
  }

  threeKindValue(h) {
    if (this.cardValue(h[0]) === this.cardValue(h[1]) &&
      this.cardValue(h[0]) === this.cardValue(h[2]))
      return 3 * this.cardValue(h[0]);

    if (this.cardValue(h[1]) === this.cardValue(h[2]) &&
      this.cardValue(h[1]) === this.cardValue(h[3]))
      return 3 * this.cardValue(h[1]);

    if (this.cardValue(h[2]) === this.cardValue(h[3]) &&
      this.cardValue(h[2]) === this.cardValue(h[4]))
      return 3 * this.cardValue(h[2]);

    return 0;
  }

  straightValue(h) {
    let cValues = h.map(this.cardValue);

    if (JSON.stringify(cValues) === JSON.stringify([2, 3, 4, 5, 14]))
      return 1 + 2 + 3 + 4 + 5;

    for (let i = 0; i < 4; i++) {
      if (cValues[i] !== cValues[i + 1] - 1) return 0;
    }

    return this.highCardValue(h);
  }

  flushValue(h) {
    for (var i = 0; i < 4; i++) {
      if (this.cardSuit(h[i]) !== this.cardSuit(h[i + 1])) return 0;
    }

    return this.highCardValue(h);
  }

  fullHouseValue(h) {
    if (this.cardValue(h[0]) === this.cardValue(h[1]) &&
      this.cardValue(h[0]) === this.cardValue(h[2]) &&
      this.cardValue(h[3]) === this.cardValue(h[4]))
      return this.highCardValue(h);

    if (this.cardValue(h[0]) === this.cardValue(h[1]) &&
      this.cardValue(h[2]) === this.cardValue(h[3]) &&
      this.cardValue(h[2]) === this.cardValue(h[4]))
      return this.highCardValue(h);

    return 0;
  }

  fourKindValue(h) {
    if (this.cardValue(h[0]) === this.cardValue(h[1]) &&
      this.cardValue(h[0]) === this.cardValue(h[2]) &&
      this.cardValue(h[0]) === this.cardValue(h[3]))
      return this.highCardValue(h);

    if (this.cardValue(h[1]) === this.cardValue(h[2]) &&
      this.cardValue(h[1]) === this.cardValue(h[3]) &&
      this.cardValue(h[1]) === this.cardValue(h[4]))
      return this.highCardValue(h);

    return 0;
  }

  straightFlushValue(h) {
    if (this.straightValue(h) && this.flushValue(h))
      return h.reverse();

    return [];
  }
};
