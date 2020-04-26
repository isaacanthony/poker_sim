'use strict';

let Player = class {
  constructor(board, card1, card2) {
    this.cards = board.concat([card1, card2]);
    this.hands = this.combine(this.cards, 5);
  }

  bestHand() {
    // Sort cards in each hand
    // this.hands.map((hand) => {
    //
    // });

    // Sort hands
    this.hands.sort(Rank.compareHands);

    return this.hands[0];
  }

  // source: https://stackoverflow.com/questions/5752002/find-all-possible-subset-combos-in-an-array
  combine(a, min) {
    let fn = (n, src, got, all) => {
      if (n == 0) {
        if (got.length > 0) {
          all[all.length] = got;
        }
        return;
      }
      for (var j = 0; j < src.length; j++) {
        fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
      }
      return;
    };

    var all = [];
    fn(min, a, [], all);
    all.push(a);
    return all.slice(0, -1);
  }
};
