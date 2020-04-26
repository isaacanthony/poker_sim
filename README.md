# poker_sim

## TODO
- [x] Show cards in layout
- [x] Allow player to specify two cards
- [x] Allow player to specify flop
- [x] Allow player to specify turn
- [x] Allow player to specify river
- [x] Add new hand button
- [x] Add fontawesome font icons
- [ ] Specify players that have folded
- [ ] Shuffle remaining cards

## Scraping Playing Card Icons
https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
```
str = ''; document.querySelectorAll('img').forEach((img) => { if (img.alt.length === 6  && img.alt.endsWith('.svg')) str += `'${img.alt.substring(0, 2)}': '${img.src}',` + "\n"; }); document.querySelectorAll('img').forEach((img) => { if (img.alt.startsWith('10') && img.alt.endsWith('.svg')) str += `'${img.alt.substring(0, 3)}': '${img.src}',` + "\n"; }); console.log(str);
```
