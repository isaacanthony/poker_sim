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
    Object.keys(this.cards).forEach((cardType) => {
      this.resetCard(cardType);
    });
  }

  resetCard(cardType) {
    this.cards[cardType] = null;
    document.querySelector(`.${cardType}`).src = this.deck.back;
  }

  updateCard(cardType) {
    let cardValue = document.querySelector(`.${cardType}-input`).value.toUpperCase();

    if (this.deck.getUrl(cardValue)) {
      this.cards[cardType] = cardValue;
      document.querySelector(`.${cardType}`).src = this.deck.getUrl(cardValue);
    } else {
      this.cards[cardType] = null;
      document.querySelector(`.${cardType}`).src = this.deck.back;
    }
  }
}
