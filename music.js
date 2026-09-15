'use strict';
window.QuizMusic = (() => {
  let enabled = true, active = false, request = 0;
  const bar = document.createElement('aside');
  bar.className = 'music-controls';
  bar.setAttribute('aria-label', 'Quizmuziek');
  bar.innerHTML = '<span>♫ Quizmuziek</span><button type="button" id="music-toggle" aria-pressed="false">▶ Muziek starten</button><details class="music-settings"><summary>Volume & speler</summary><div class="music-settings-body"><label for="music-volume">Volume</label><input id="music-volume" type="range" min="0" max="100" value="65"><audio controls loop preload="none" playsinline src="assets/quiz-music.wav?v=5">Je browser ondersteunt geen audio.</audio></div></details><span id="music-state" role="status">Muziek tijdens het oefenen</span>';
  document.querySelector('header').insertAdjacentElement('afterend', bar);
  const player = bar.querySelector('audio'), toggle = bar.querySelector('button'), slider = bar.querySelector('input'), state = bar.querySelector('[role=status]');
  player.volume = 0.65;
  function display(playing, message) {
    toggle.textContent = playing ? '⏸ Muziek pauzeren' : '▶ Muziek starten';
    toggle.setAttribute('aria-pressed', String(playing));
    state.textContent = message || (playing ? 'Muziek speelt' : 'Muziek gepauzeerd');
  }
  function halt() { request++; player.pause(); display(false); }
  function play() {
    if (!enabled || document.hidden) return;
    const ticket = ++request;
    display(false, 'Muziek laden…');
    const result = player.play();
    if (result && result.catch) result.catch(() => {
      if (ticket === request) display(false, 'Tik op ▶ hieronder om het geluid te starten');
    });
  }
  player.addEventListener('playing', () => { enabled = true; display(true); });
  player.addEventListener('pause', () => display(false));
  player.addEventListener('error', () => display(false, 'Geluid laden mislukt. Vernieuw de pagina en probeer opnieuw.'));
  toggle.onclick = () => {
    if (!player.paused) { enabled = false; halt(); }
    else { enabled = true; play(); }
  };
  slider.oninput = () => { player.volume = Number(slider.value) / 100; player.muted = player.volume === 0; };
  player.addEventListener('volumechange', () => { slider.value = Math.round(player.volume * 100); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) halt(); else if (active && enabled) play(); });
  window.addEventListener('pagehide', halt);
  return { start() { active = true; play(); }, stop() { active = false; halt(); } };
})();
