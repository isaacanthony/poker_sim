'use strict';

let Rank = class {
  static compareHands(h1, h2) {
    let diff = 0;

    // Straight flush
    diff = Rank.compareHand(Rank.straightFlush(h1), Rank.straightFlush(h2));
    if (diff) return diff;

    // Four kind
    diff = Rank.compareHand(Rank.fourKind(h1), Rank.fourKind(h2));
    if (diff) return diff;

    // Full house
    diff = Rank.compareHand(Rank.fullHouse(h1), Rank.fullHouse(h2));
    if (diff) return diff;

    // Flush
    diff = Rank.compareHand(Rank.flush(h1), Rank.flush(h2));
    if (diff) return diff;

    // Straight
    diff = Rank.compareHand(Rank.straight(h1), Rank.straight(h2));
    if (diff) return diff;

    // Three kind
    diff = Rank.compareHand(Rank.threeKind(h1), Rank.threeKind(h2));
    if (diff) return diff;

    // Two pair
    diff = Rank.compareHand(Rank.twoPair(h1), Rank.twoPair(h2));
    if (diff) return diff;

    // Pair
    diff = Rank.compareHand(Rank.pair(h1), Rank.pair(h2));
    if (diff) return diff;

    // High card
    return Rank.compareHand(h1, h2);
  }

  static compareHand(h1, h2) {
    if (h1.length && !h2.length) return -1;
    if (!h1.length && h2.length) return 1;

    for (let i = 0; i < 5; i++) {
      if (Rank.cardValue(h1[i]) > Rank.cardValue(h2[i])) return -1;
      if (Rank.cardValue(h1[i]) < Rank.cardValue(h2[i])) return 1;
    }

    return 0;
  }

  static cardValue(c) {
    if (!c) return 0;
    let cValue = c.slice(0, -1);
    return {'J': 11, 'Q': 12, 'K': 13, 'A': 14}[cValue] || cValue * 1;
  }

  static cardSuit(c) {
    return c.slice(-1);
  }

  static pair(h) {
    for (let i = 0; i < 4; i++) {
      if (Rank.cardValue(h[i]) === Rank.cardValue(h[i + 1]))
        return [h[i], h[i + 1]].concat(h.filter((c) => ![h[i], h[i + 1]].includes(c)));
    }

    return [];
  }

  static twoPair(h) {
    if (Rank.cardValue(h[0]) === Rank.cardValue(h[1]) && Rank.cardValue(h[2]) === Rank.cardValue(h[3])) {
      if (Rank.cardValue(h[0]) > Rank.cardValue(h[2]))
        return [h[0], h[1], h[2], h[3], h[4]];

      return [h[2], h[3], h[0], h[1], h[4]];
    }

    if (Rank.cardValue(h[0]) === Rank.cardValue(h[1]) && Rank.cardValue(h[3]) === Rank.cardValue(h[4])) {
      if (Rank.cardValue(h[0]) > Rank.cardValue(h[3]))
        return [h[0], h[1], h[3], h[4], h[2]];

      return [h[3], h[4], h[0], h[1], h[2]];
    }

    if (Rank.cardValue(h[1]) === Rank.cardValue(h[2]) && Rank.cardValue(h[3]) === Rank.cardValue(h[4])) {
      if (Rank.cardValue(h[1]) > Rank.cardValue(h[3]))
        return [h[1], h[2], h[3], h[4], h[0]];

      return [h[3], h[4], h[1], h[2], h[0]];
    }

    return [];
  }

  static threeKind(h) {
    if (Rank.cardValue(h[0]) === Rank.cardValue(h[1]) && Rank.cardValue(h[0]) === Rank.cardValue(h[2])) {
      if (Rank.cardValue(h[3]) > Rank.cardValue(h[4]))
        return [h[0], h[1], h[2], h[3], h[4]];

      return [h[0], h[1], h[2], h[4], h[3]];
    }

    if (Rank.cardValue(h[1]) === Rank.cardValue(h[2]) && Rank.cardValue(h[1]) === Rank.cardValue(h[3])) {
      if (Rank.cardValue(h[0]) > Rank.cardValue(h[4]))
        return [h[1], h[2], h[3], h[0], h[4]];

      return [h[1], h[2], h[3], h[4], h[0]];
    }

    if (Rank.cardValue(h[2]) === Rank.cardValue(h[3]) && Rank.cardValue(h[2]) === Rank.cardValue(h[4])) {
      if (Rank.cardValue(h[0]) > Rank.cardValue(h[1]))
        return [h[2], h[3], h[4], h[0], h[1]];

      return [h[2], h[3], h[4], h[1], h[0]];
    }

    return [];
  }

  static straight(h) {
    let cValues = h.map(Rank.cardValue);

    if (JSON.stringify(cValues) === JSON.stringify([14, 5, 4, 3, 2]))
      return [h[1], h[2], h[3], h[4], h[0]];

    for (let i = 0; i < 4; i++) {
      if (cValues[i] !== cValues[i + 1] + 1) return [];
    }

    return h;
  }

  static flush(h) {
    for (var i = 0; i < 4; i++) {
      if (Rank.cardSuit(h[i]) !== Rank.cardSuit(h[i + 1])) return [];
    }

    return h;
  }

  static fullHouse(h) {
    if (Rank.cardValue(h[0]) === Rank.cardValue(h[1]) &&
      Rank.cardValue(h[0]) === Rank.cardValue(h[2]) &&
      Rank.cardValue(h[3]) === Rank.cardValue(h[4]))
      return [h[0], h[1], h[2], h[3], h[4]];

    if (Rank.cardValue(h[0]) === Rank.cardValue(h[1]) &&
      Rank.cardValue(h[2]) === Rank.cardValue(h[3]) &&
      Rank.cardValue(h[2]) === Rank.cardValue(h[4]))
      return [h[2], h[3], h[4], h[0], h[1]];

    return [];
  }

  static fourKind(h) {
    if (Rank.cardValue(h[0]) === Rank.cardValue(h[1]) &&
      Rank.cardValue(h[0]) === Rank.cardValue(h[2]) &&
      Rank.cardValue(h[0]) === Rank.cardValue(h[3]))
      return [h[0], h[1], h[2], h[3], h[4]];

    if (Rank.cardValue(h[1]) === Rank.cardValue(h[2]) &&
      Rank.cardValue(h[1]) === Rank.cardValue(h[3]) &&
      Rank.cardValue(h[1]) === Rank.cardValue(h[4]))
      return [h[1], h[2], h[3], h[4], h[0]];

    return [];
  }

  static straightFlush(h) {
    if (Rank.straight(h).length && Rank.flush(h).length) return h;
    return [];
  }
};
