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

    this.players = {
      'p1': true,
      'p2': true,
      'p3': true,
      'p4': true,
      'p5': true,
      'p6': true,
      'p7': true,
    }

    this.reset();
  }

  reset() {
    Object.keys(this.cards).forEach((cardType) => {
      this.resetCard(cardType);
    });

    Object.keys(this.players).forEach((playerId) => {
      this.resetPlayer(playerId);
    });
  }

  resetCard(cardType) {
    this.cards[cardType] = null;

    if (document.querySelector(`.${cardType}-input`))
      document.querySelector(`.${cardType}-input`).value = null;

    if (document.querySelector(`.${cardType}`))
      document.querySelector(`.${cardType}`).src = this.deck.back;
  }

  updateCard(cardType, cardValue = null) {
    if (!cardValue) cardValue = document.querySelector(`.${cardType}-input`).value.toUpperCase();

    if (this.deck.getUrl(cardValue)) {
      this.cards[cardType] = cardValue;

      if (document.querySelector(`.${cardType}-input`))
        document.querySelector(`.${cardType}-input`).value = cardValue;

      if (document.querySelector(`.${cardType}`))
        document.querySelector(`.${cardType}`).src = this.deck.getUrl(cardValue);
    } else {
      this.resetCard(cardType);
    }
  }

  fold(playerId) {
    this.players[playerId] = false;

    [`.${playerId}c1`, `.${playerId}c2`, `.${playerId}-fold`].forEach((cls) => {
      if (document.querySelector(cls))
        document.querySelector(cls).classList.add('folded');
    });

    if (document.querySelector(`.${playerId}-fold`))
      document.querySelector(`.${playerId}-fold`).disabled = true;
  }

  resetPlayer(playerId) {
    this.players[playerId] = true;

    [`.${playerId}c1`, `.${playerId}c2`, `.${playerId}-fold`].forEach((cls) => {
      if (document.querySelector(cls))
        document.querySelector(cls).classList.remove('folded');
    });

    if (document.querySelector(`.${playerId}-fold`))
      document.querySelector(`.${playerId}-fold`).disabled = false;
  }
};
