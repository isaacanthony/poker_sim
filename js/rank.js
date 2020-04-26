'use strict';

let Rank = class {
  constructor() {}

  getScore(hand) {
    if (this.isStraightFlush(hand)) return {text:'Straight Flush<br>(+250)',coins:250};
    if (this.isFourKind(hand)) return {text:'Four of a Kind<br>(+125)',coins:125};
    if (this.isFullHouse(hand)) return {text:'Full House<br>(+45)',coins:45};
    if (this.isFlush(hand)) return {text:'Flush<br>(+30)',coins:30};
    if (this.isStraight(hand)) return {text:'Straight<br>(+20)',coins:20};
    if (this.isThreeKind(hand)) return {text:'Three of a Kind<br>(+15)',coins:15};
    if (this.isTwoPair(hand)) return {text:'Two Pair<br>(+10)',coins:10};
    if (this.isPair(hand)) return {text:'Pair<br>(+5)',coins:5};
    return {text:'High Card<br>(+0)',coins:0};
  }

  cardValue(h) {
    return h.slice(0, -1);
  }

  cardNumericValue(card) {
    return {'J': 11, 'Q': 12, 'K': 13, 'A': 14}[card] || card * 1;
  }

  cardSuit(h) {
    return h.slice(-1);
  }

  highCardValue(hand) {
    return hand.reduce((total, card) => {total + this.cardNumericValue(card)}, 0);
  }

  isPair(h) {
    for (var i = 0; i < 4; i++) {
      if (this.cardValue(h[i]) === this.cardValue(h[i + 1])) return true;
    }
    return false;
  }

  isTwoPair(h) {
    if (this.cardValue(h[0]) === this.cardValue(h[1]) &&
       (this.cardValue(h[2]) === this.cardValue(h[3]) ||
        this.cardValue(h[3]) === this.cardValue(h[4]))) return true;
    if (this.cardValue(h[3]) === this.cardValue(h[4]) &&
        this.cardValue(h[1]) === this.cardValue(h[2])) return true;
    return false;
  }

  isThreeKind(h) {
    if (this.cardValue(h[0]) === this.cardValue(h[1]) &&
        this.cardValue(h[0]) === this.cardValue(h[2])) return true;
    if (this.cardValue(h[1]) === this.cardValue(h[2]) &&
        this.cardValue(h[1]) === this.cardValue(h[3])) return true;
    if (this.cardValue(h[2]) === this.cardValue(h[3]) &&
        this.cardValue(h[2]) === this.cardValue(h[4])) return true;
    return false;
  }

  isStraight(h) {
    var values = [];
    for (var i = 0; i < 5; i++) {
      var temp = this.cardValue(h[i]);
      switch (temp) {
        case '0': temp = 10; break;
        case 'J': temp = 11; break;
        case 'Q': temp = 12; break;
        case 'K': temp = 13; break;
        case 'A': temp = 1; break;
        default: temp = temp * 1; break;
      }
      values[i] = temp;
    }
    values = values.sort(function(a, b){return a-b;});
    if (values[0] === 1 && values[1] === 10 && values[2] === 11 &&
        values[3] === 12 && values[4] === 13) return true;
    for (var i = 0; i < 4; i++) {
      if (values[i] + 1 !== values[i + 1]) return false;
    }
    return true;
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
