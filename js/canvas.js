'use strict';

let Canvas = class {
  static updatePlayerWins(playerId, wins, total_runs) {
    let winPct = Math.round(wins * 100.0 / total_runs);

    if (document.querySelector(`.${playerId}-win-pct`))
      document.querySelector(`.${playerId}-win-pct`).innerHTML = winPct + '%';
  }

  static resetPlayerWins(playerId) {
    Canvas.updatePlayerWins(playerId, 0, 1);
  }

  static updateProgress(count, total) {
    let pct = Math.round(count * 100 / total);

    if (document.querySelector('.progress-bar'))
      document.querySelector('.progress-bar').style.width = `${pct}%`;
  }

  static resetProgress() {
    Canvas.updateProgress(0, 1);
  }
};
