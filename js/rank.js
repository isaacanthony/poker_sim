'use strict';

let Rank = class {
  constructor() {}

  compareHands(h1, h2) {
    let diff = 0;

    // Straight flush
    diff = this.compareHand(this.straightFlush(h1), this.straightFlush(h2));
    if (diff) return diff;

    // Four kind
    diff = this.compareHand(this.fourKind(h1), this.fourKind(h2));
    if (diff) return diff;

    // Full house
    diff = this.compareHand(this.fullHouse(h1), this.fullHouse(h2));
    if (diff) return diff;

    // Flush
    diff = this.compareHand(this.flush(h1), this.flush(h2));
    if (diff) return diff;

    // Straight
    diff = this.compareHand(this.straight(h1), this.straight(h2));
    if (diff) return diff;

    // Three kind
    diff = this.compareHand(this.threeKind(h1), this.threeKind(h2));
    if (diff) return diff;

    // Two pair
    diff = this.compareHand(this.twoPair(h1), this.twoPair(h2));
    if (diff) return diff;

    // Pair
    diff = this.compareHand(this.pair(h1), this.pair(h2));
    if (diff) return diff;

    // High card
    return this.compareHand(h1, h2);
  }

  compareHand(h1, h2) {
    if (h1.length && !h2.length) return -1;
    if (!h1.length && h2.length) return 1;

    for (let i = 0; i < 5; i++) {
      if (this.cardValue(h1[i]) > this.cardValue(h2[i])) return -1;
      if (this.cardValue(h1[i]) < this.cardValue(h2[i])) return 1;
    }

    return 0;
  }

  cardValue(c) {
    if (!c) return 0;
    let cValue = c.slice(0, -1);
    return {'J': 11, 'Q': 12, 'K': 13, 'A': 14}[cValue] || cValue * 1;
  }

  cardSuit(c) {
    return c.slice(-1);
  }

  pair(h) {
    for (let i = 0; i < 4; i++) {
      if (this.cardValue(h[i]) === this.cardValue(h[i + 1]))
        return [h[i], h[i + 1]].concat(h.filter((c) => ![h[i], h[i + 1]].includes(c)));
    }

    return [];
  }

  twoPair(h) {
    if (this.cardValue(h[0]) === this.cardValue(h[1]) && this.cardValue(h[2]) === this.cardValue(h[3])) {
      if (this.cardValue(h[0]) > this.cardValue(h[2]))
        return [h[0], h[1], h[2], h[3], h[4]];

      return [h[2], h[3], h[0], h[1], h[4]];
    }

    if (this.cardValue(h[0]) === this.cardValue(h[1]) && this.cardValue(h[3]) === this.cardValue(h[4])) {
      if (this.cardValue(h[0]) > this.cardValue(h[3]))
        return [h[0], h[1], h[3], h[4], h[2]];

      return [h[3], h[4], h[0], h[1], h[2]];
    }

    if (this.cardValue(h[1]) === this.cardValue(h[2]) && this.cardValue(h[3]) === this.cardValue(h[4])) {
      if (this.cardValue(h[1]) > this.cardValue(h[3]))
        return [h[1], h[2], h[3], h[4], h[0]];

      return [h[3], h[4], h[1], h[2], h[0]];
    }

    return [];
  }

  threeKind(h) {
    if (this.cardValue(h[0]) === this.cardValue(h[1]) && this.cardValue(h[0]) === this.cardValue(h[2])) {
      if (this.cardValue(h[3]) > this.cardValue(h[4]))
        return [h[0], h[1], h[2], h[3], h[4]];

      return [h[0], h[1], h[2], h[4], h[3]];
    }

    if (this.cardValue(h[1]) === this.cardValue(h[2]) && this.cardValue(h[1]) === this.cardValue(h[3])) {
      if (this.cardValue(h[0]) > this.cardValue(h[4]))
        return [h[1], h[2], h[3], h[0], h[4]];

      return [h[1], h[2], h[3], h[4], h[0]];
    }

    if (this.cardValue(h[2]) === this.cardValue(h[3]) && this.cardValue(h[2]) === this.cardValue(h[4])) {
      if (this.cardValue(h[0]) > this.cardValue(h[1]))
        return [h[2], h[3], h[4], h[0], h[1]];

      return [h[2], h[3], h[4], h[1], h[0]];
    }

    return [];
  }

  straight(h) {
    let cValues = h.map(this.cardValue);

    if (JSON.stringify(cValues) === JSON.stringify([14, 5, 4, 3, 2]))
      return [h[1], h[2], h[3], h[4], h[0]];

    for (let i = 0; i < 4; i++) {
      if (cValues[i] !== cValues[i + 1] + 1) return [];
    }

    return h;
  }

  flush(h) {
    for (var i = 0; i < 4; i++) {
      if (this.cardSuit(h[i]) !== this.cardSuit(h[i + 1])) return [];
    }

    return h;
  }

  fullHouse(h) {
    if (this.cardValue(h[0]) === this.cardValue(h[1]) &&
      this.cardValue(h[0]) === this.cardValue(h[2]) &&
      this.cardValue(h[3]) === this.cardValue(h[4]))
      return [h[0], h[1], h[2], h[3], h[4]];

    if (this.cardValue(h[0]) === this.cardValue(h[1]) &&
      this.cardValue(h[2]) === this.cardValue(h[3]) &&
      this.cardValue(h[2]) === this.cardValue(h[4]))
      return [h[2], h[3], h[4], h[0], h[1]];

    return [];
  }

  fourKind(h) {
    if (this.cardValue(h[0]) === this.cardValue(h[1]) &&
      this.cardValue(h[0]) === this.cardValue(h[2]) &&
      this.cardValue(h[0]) === this.cardValue(h[3]))
      return [h[0], h[1], h[2], h[3], h[4]];

    if (this.cardValue(h[1]) === this.cardValue(h[2]) &&
      this.cardValue(h[1]) === this.cardValue(h[3]) &&
      this.cardValue(h[1]) === this.cardValue(h[4]))
      return [h[1], h[2], h[3], h[4], h[0]];

    return [];
  }

  straightFlush(h) {
    if (this.straight(h).length && this.flush(h).length) return h;
    return [];
  }
};
