'use strict';

let Simulation = class {
  constructor(deck, hand) {
    this.deck = deck;
    this.hand = hand;
  }

  run() {
    // Shuffle deck
    this.deck.shuffle();
    let index = 0;

    // Remove already dealt cards
    let cards = this.deck.cards.filter((card) => {
      return !Object.values(this.hand.cards).includes(card);
    });

    // Deal cards to non-folded players
    let players = Object.keys(this.hand.players).filter((player) => {
      return this.hand.players[player];
    }).reduce((hsh, player) => {
      hsh[player] = [cards[index += 1], cards[index += 1]];
      return hsh;
    }, {});

    // Deal flop, turn, river
    let board = [1, 2, 3, 4, 5].map((_) => cards[index += 1])

    return {
      'cards': cards,
      'players': players,
      'board': board,
    };
  }
};
