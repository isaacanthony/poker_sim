# poker_sim

## TODO
- [x] Show cards in layout
- [x] Allow player to specify two cards
- [x] Allow player to specify flop
- [x] Allow player to specify turn
- [x] Allow player to specify river
- [x] Add new hand button
- [x] Add fontawesome font icons
- [x] Specify players that have folded
- [x] Add testing framework
- [x] Build out ranking logic (two pair vs. high card etc.)
- [x] Get value of first 5 cards
- [x] Have all inputs into hand ranking be descending order
- [x] Get value of best 5 cards (7 choose 5 = 21 possiblities)
- [ ] Compare hand to dummy opponent hand
- [ ] Simulate hands
- [ ] Show % chance of winning

## Scraping Playing Card Icons
https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
```
str = ''; document.querySelectorAll('img').forEach((img) => { if (img.alt.length === 6  && img.alt.endsWith('.svg')) str += `'${img.alt.substring(0, 2)}': '${img.src}',` + "\n"; }); document.querySelectorAll('img').forEach((img) => { if (img.alt.startsWith('10') && img.alt.endsWith('.svg')) str += `'${img.alt.substring(0, 3)}': '${img.src}',` + "\n"; }); console.log(str);
```
