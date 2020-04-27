'use strict';

let Canvas = class {
  static updatePlayerWins(playerWins, totalRuns) {
    Object.keys(playerWins).forEach((playerId) => {
      let winPct = Math.round(playerWins[playerId] * 100.0 / totalRuns);

      if (document.querySelector(`.${playerId}-win-pct`))
        document.querySelector(`.${playerId}-win-pct`).innerHTML = winPct + '%';
    });
  }

  static resetPlayerWins(playerId) {
    if (document.querySelector(`.${playerId}-win-pct`))
      document.querySelector(`.${playerId}-win-pct`).innerHTML = '0%';
  }

  static updateProgress(count, total) {
    let pct = Math.round(count * 100 / total);

    if (document.querySelector('.progress-bar'))
      document.querySelector('.progress-bar').style.width = `${pct}%`;
  }

  static resetProgress() {
    Canvas.updateProgress(0, 1);
  }

  static disableBtn(cls) {
    if (document.querySelector(`.btn-${cls}`)) {
      document.querySelector(`.btn-${cls}`).disabled = true;
      document.querySelector(`.btn-${cls}`).classList.add('disabled');
    }
  }

  static enableBtn(cls) {
    if (document.querySelector(`.btn-${cls}`)) {
      document.querySelector(`.btn-${cls}`).disabled = false;
      document.querySelector(`.btn-${cls}`).classList.remove('disabled');
    }
  }

  static enableInput(cls) {
    if (document.querySelector(`.${cls}-input`))
      document.querySelector(`.${cls}-input`).disabled = false;
  }

  static disableInput(cls) {
    if (document.querySelector(`.${cls}-input`))
      document.querySelector(`.${cls}-input`).disabled = true;
  }

  static freezeInput() {
    // Disable fold buttons
    if (document.querySelectorAll('.btn-fold').length)
      document.querySelectorAll('.btn-fold').forEach((btn) => btn.disabled = true);

    // Disable card inputs
    if (document.querySelectorAll('.card-input').length)
      document.querySelectorAll('.card-input').forEach((input) => input.disabled = true);
  }

  static enableAllInput(hand) {
    Object.values(hand).forEach(Canvas.disableInput);
    ['card1', 'card2'].forEach(Canvas.enableInput);

    if (hand['card1'] && hand['card2']) {
      Canvas.enableBtn('run');
      ['flop1', 'flop2', 'flop3'].forEach(Canvas.enableInput);
    }

    if (hand['flop1'] && hand['flop2'] && hand['flop3'])
      Canvas.enableInput('turn');

    if (hand['turn']) Canvas.enableInput('river');
  }
};
