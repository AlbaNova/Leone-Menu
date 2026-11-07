// Remy's Birthday. The doodles are inline SVG in index.html and animate with CSS (remy.css);
// this module only switches the theme on and off and pauses motion when it is not wanted.
export function setupRemy() {
  const parts = [...document.querySelectorAll('[data-remy]')];
  const motion = [...document.querySelectorAll('[data-remy-motion]')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let enabled = false;
  function sync() {
    document.body.classList.toggle('remy-mode', enabled);
    for (const el of parts) el.hidden = !enabled;
    // Moving layers never run for reduced-motion visitors and stop in hidden tabs.
    for (const el of motion) el.hidden = !enabled || reduced.matches;
    document.body.classList.toggle('remy-paused', document.hidden);
  }
  reduced.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  return { setEnabled(value) { const next = !!value; if (next === enabled) return; enabled = next; sync(); } };
}
