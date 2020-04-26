'use strict';

let Hand = class {
  constructor(deck) {
    this.deck = deck;

    this.cards = {
      'card1': null,
      'card2': null,
      'flop1': null,
      'flop2': null,
      'flop3': null,
      'turn': null,
      'river': null,
    };

    this.reset();
  }

  reset() {
    this.deck.shuffle();
    this.assignCard('card1', this.deck.dealCard());
    this.assignCard('card2', this.deck.dealCard());
    this.assignCard('flop1', null);
    this.assignCard('flop2', null);
    this.assignCard('flop3', null);
    this.assignCard('turn', null);
    this.assignCard('river', null);
  }

  assignCard(cardType, card) {
    this.cards[cardType] = card;
    let el = document.querySelector('.' + cardType);

    if (card) {
      el.src = this.deck.getUrl(card);
    } else {
      el.src = this.deck.back;
    }
  }
}
