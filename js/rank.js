'use strict';

let Rank = class {
  constructor() {}

  // getScore(hand) {
  //   if (this.isStraightFlush(hand)) return {text:'Straight Flush<br>(+250)',coins:250};
  //   if (this.isFourKind(hand)) return {text:'Four of a Kind<br>(+125)',coins:125};
  //   if (this.isFullHouse(hand)) return {text:'Full House<br>(+45)',coins:45};
  //   if (this.isFlush(hand)) return {text:'Flush<br>(+30)',coins:30};
  //   if (this.isStraight(hand)) return {text:'Straight<br>(+20)',coins:20};
  //   if (this.isThreeKind(hand)) return {text:'Three of a Kind<br>(+15)',coins:15};
  //   if (this.isTwoPair(hand)) return {text:'Two Pair<br>(+10)',coins:10};
  //   if (this.isPair(hand)) return {text:'Pair<br>(+5)',coins:5};
  //   return {text:'High Card<br>(+0)',coins:0};
  // }

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

    return cValues.reduce((total, cValue) => { return total + cValue; }, 0);
  }

  isFlush(h) {
    for (var i = 0; i < 4; i++) {
      if (this.cardSuit(h[i]) !== this.cardSuit(h[i + 1])) return false;
    }
    return true;
  }

  isFullHouse(h) {
    if (this.cardValue(h[0]) === this.cardValue(h[1]) &&
        this.cardValue(h[0]) === this.cardValue(h[2]) &&
        this.cardValue(h[3]) === this.cardValue(h[4])) return true;
    if (this.cardValue(h[4]) === this.cardValue(h[3]) &&
        this.cardValue(h[4]) === this.cardValue(h[2]) &&
        this.cardValue(h[1]) === this.cardValue(h[0])) return true;
    return false;
  }

  isFourKind(h) {
    if (this.cardValue(h[0]) === this.cardValue(h[1]) &&
        this.cardValue(h[0]) === this.cardValue(h[2]) &&
        this.cardValue(h[0]) === this.cardValue(h[3])) return true;
    if (this.cardValue(h[4]) === this.cardValue(h[1]) &&
        this.cardValue(h[4]) === this.cardValue(h[2]) &&
        this.cardValue(h[4]) === this.cardValue(h[3])) return true;
    return false;
  }

  isStraightFlush(h) {
    return this.isStraight(h) && this.isFlush(h);
  }
}
