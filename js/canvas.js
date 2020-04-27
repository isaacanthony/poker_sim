'use strict';

let Canvas = class {
  static updatePlayerWins(playerId, wins, total_runs) {
    let winPct = Math.round(wins * 100.0 / total_runs);

    if (document.querySelector(`.${playerId}-win-pct`))
      document.querySelector(`.${playerId}-win-pct`).innerHTML = winPct + '%';
  }

  static resetPlayerWins(playerId) {
    if (document.querySelector(`.${playerId}-win-pct`))
      document.querySelector(`.${playerId}-win-pct`).innerHTML = '0%';
  }
};
