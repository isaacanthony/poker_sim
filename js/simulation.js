'use strict';

let Simulation = class {
  constructor(deck, hand) {
    this.deck = deck;
    this.hand = hand;
    this.maxRuns = 1000;
    this.totalRuns = 0;
    this.playerWins = {};
  }

  reset() {
    Object.keys(this.playerWins).forEach(Canvas.resetPlayerWins);
    Canvas.resetProgress();
    this.totalRuns = 0;
    this.playerWins = {};
    this.hand.reset();
  }

  simulate() {
    let timeoutLoop = (i = 0) => {
      if (!this.hand.cards['card1'] || !this.hand.cards['card2']) return;

      this.run();
      Canvas.updateProgress(i, this.maxRuns);

      if (i < this.maxRuns) {
        window.setTimeout(() => timeoutLoop(i + 1), 1);
      }
    }

    window.setTimeout(timeoutLoop, 1);
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
      if (player == 'p0') {
        hsh[player] = [this.hand.card1, this.hand.card2];
      } else {
        hsh[player] = [cards[index += 1], cards[index += 1]];
      }
      return hsh;
    }, {});

    // Deal flop
    let board = [];

    if (this.hand.cards['flop1'] && this.hand.cards['flop2'] && this.hand.cards['flop3']) {
      board = [this.hand.cards['flop1'], this.hand.cards['flop2'], this.hand.cards['flop3']];
    } else {
      board = [cards[index += 1], cards[index += 1], cards[index += 1]];
    }

    // Deal turn
    if (this.hand.cards['turn']) {
      board.push(this.hand.cards['turn']);
    } else {
      board.push(cards[index += 1]);
    }

    // Deal river
    if (this.hand.cards['river']) {
      board.push(this.hand.cards['river']);
    } else {
      board.push(cards[index += 1]);
    }

    // Create players
    players = Object.keys(players).map((playerId) => {
      return new Player(playerId, board, players[playerId][0], players[playerId][1]);
    }).sort((player1, player2) => {
      return Rank.compareHands(player1.bestHand, player2.bestHand);
    });

    // Record winner
    let winnerId = players[0]['id'];

    if (this.playerWins[winnerId]) {
      this.playerWins[winnerId] += 1;
    } else {
      this.playerWins[winnerId] = 1;
    }

    this.totalRuns += 1;
    Canvas.updatePlayerWins(winnerId, this.playerWins[winnerId], this.totalRuns);

    return {
      'cards': cards,
      'players': players,
      'board': board,
    };
  }
};
