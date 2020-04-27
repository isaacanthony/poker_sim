# poker_sim

## TODO
- [ ] Add tests
- [ ] Specify number of simulations to run
- [ ] When reset leave cards, add clear? functionality

## Scraping Playing Card Icons
https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
```
str = ''; document.querySelectorAll('img').forEach((img) => { if (img.alt.length === 6  && img.alt.endsWith('.svg')) str += `'${img.alt.substring(0, 2)}': '${img.src}',` + "\n"; }); document.querySelectorAll('img').forEach((img) => { if (img.alt.startsWith('10') && img.alt.endsWith('.svg')) str += `'${img.alt.substring(0, 3)}': '${img.src}',` + "\n"; }); console.log(str);
```
