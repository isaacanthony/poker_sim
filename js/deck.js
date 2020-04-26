'use strict';

let Deck = class {
  constructor() {
    this.back = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Card_back_17.svg/83px-Card_back_17.svg.png';

    this.urls = {
      '2C': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/2C.svg/86px-2C.svg.png',
      '2D': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/2D.svg/86px-2D.svg.png',
      '2H': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2H.svg/86px-2H.svg.png',
      '2S': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/2S.svg/86px-2S.svg.png',
      '3C': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/3C.svg/86px-3C.svg.png',
      '3D': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/3D.svg/86px-3D.svg.png',
      '3H': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/3H.svg/86px-3H.svg.png',
      '3S': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/3S.svg/86px-3S.svg.png',
      '4C': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/4C.svg/86px-4C.svg.png',
      '4D': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/4D.svg/86px-4D.svg.png',
      '4H': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/4H.svg/86px-4H.svg.png',
      '4S': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/4S.svg/86px-4S.svg.png',
      '5C': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/5C.svg/86px-5C.svg.png',
      '5D': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/5D.svg/86px-5D.svg.png',
      '5H': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/5H.svg/86px-5H.svg.png',
      '5S': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/5S.svg/86px-5S.svg.png',
      '6C': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/6C.svg/86px-6C.svg.png',
      '6D': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/6D.svg/86px-6D.svg.png',
      '6H': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/6H.svg/86px-6H.svg.png',
      '6S': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/6S.svg/86px-6S.svg.png',
      '7C': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/7C.svg/86px-7C.svg.png',
      '7D': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/7D.svg/86px-7D.svg.png',
      '7H': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/7H.svg/86px-7H.svg.png',
      '7S': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/7S.svg/86px-7S.svg.png',
      '8C': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/8C.svg/86px-8C.svg.png',
      '8D': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/8D.svg/86px-8D.svg.png',
      '8H': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/8H.svg/86px-8H.svg.png',
      '8S': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/8S.svg/86px-8S.svg.png',
      '9C': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/9C.svg/86px-9C.svg.png',
      '9D': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/9D.svg/86px-9D.svg.png',
      '9H': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/9H.svg/86px-9H.svg.png',
      '9S': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/9S.svg/86px-9S.svg.png',
      'AC': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/AC.svg/86px-AC.svg.png',
      'AD': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/AD.svg/86px-AD.svg.png',
      'AH': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/AH.svg/86px-AH.svg.png',
      'AS': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/AS.svg/86px-AS.svg.png',
      'JC': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/JC.svg/86px-JC.svg.png',
      'JD': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/JD.svg/86px-JD.svg.png',
      'JH': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JH.svg/86px-JH.svg.png',
      'JS': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/JS.svg/86px-JS.svg.png',
      'KC': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/KC.svg/86px-KC.svg.png',
      'KD': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/KD.svg/86px-KD.svg.png',
      'KH': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/KH.svg/86px-KH.svg.png',
      'KS': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/KS.svg/86px-KS.svg.png',
      'QC': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/QC.svg/86px-QC.svg.png',
      'QD': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/QD.svg/86px-QD.svg.png',
      'QH': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/QH.svg/86px-QH.svg.png',
      'QS': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/QS.svg/86px-QS.svg.png',
      '10C': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/10C.svg/86px-10C.svg.png',
      '10D': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/10D.svg/86px-10D.svg.png',
      '10H': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/10H.svg/86px-10H.svg.png',
      '10S': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/10S.svg/86px-10S.svg.png',
    };

    this.cards = Object.keys(this.urls);
  }

  shuffle() {
    for (let j, x, i = this.cards.length; i; j = Math.floor(Math.random() * i),
      x = this.cards[--i], this.cards[i] = this.cards[j], this.cards[j] = x);
  }

  getUrl(card) {
    return this.urls[card];
  }
};
