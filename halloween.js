const svg = (content, className = '') => `<svg class="${className}" viewBox="0 0 100 80" aria-hidden="true" focusable="false">${content}</svg>`;
const bat = svg('<path fill="currentColor" d="M45 33 41 19 49 25 57 19 56 33C68 20 79 16 96 12L86 34 93 49Q76 41 72 60L59 53 50 69 41 53 28 60Q24 41 7 49L14 34 4 12Q29 18 45 33Z"/><circle cx="46" cy="39" r="2" fill="#ffba6c"/><circle cx="54" cy="39" r="2" fill="#ffba6c"/>', 'h-bat');
const pumpkin = svg('<path d="M49 20Q43 9 55 7" fill="none" stroke="#799569" stroke-width="7" stroke-linecap="round"/><ellipse cx="50" cy="47" rx="40" ry="29" fill="#f6a04a"/><ellipse cx="50" cy="47" rx="23" ry="29" fill="#e87930"/><ellipse cx="50" cy="47" rx="11" ry="29" fill="#ffa749"/><path d="m24 43 11-9 7 12Zm34 3 7-12 11 9ZM31 56l9 2 4-4 7 6 7-6 5 4 8-2q-18 22-40 0" fill="#261420"/>', 'h-pumpkin');
const ghost = svg('<path d="M23 65V33a27 27 0 0 1 54 0v32l-10-8-9 9-9-9-9 9-8-9Z" fill="#fff4df"/><ellipse cx="41" cy="32" rx="3" ry="5" fill="#241b2b"/><ellipse cx="59" cy="32" rx="3" ry="5" fill="#241b2b"/><ellipse cx="50" cy="45" rx="4" ry="5" fill="#241b2b"/>', 'h-ghost');

export function setupHalloween() {
  document.querySelectorAll('[data-halloween-pumpkin]').forEach(el => { el.innerHTML = pumpkin; });
  document.querySelectorAll('[data-halloween-art]').forEach(el => { el.innerHTML = pumpkin + ghost + bat; });
  const flight = document.createElement('div'); flight.className = 'halloween-flight'; flight.setAttribute('aria-hidden','true'); document.body.append(flight);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let theme='classic';
  let timer;
  function clear() { clearTimeout(timer); flight.replaceChildren(); }
  reduced.addEventListener('change', clear);
  return {
    setTheme(value) {
      const next=['classic','halloween','christmas'].includes(value)?value:'classic';
      const changed=theme!==next;theme=next;
      document.body.classList.toggle('christmas-mode',theme==='christmas');
      document.querySelector('#christmas-greeting').hidden=theme!=='christmas';
      document.querySelector('.halloween-entry').hidden=theme!=='halloween';
      document.querySelector('.halloween-shortcut-bar').hidden=theme!=='halloween'||document.body.classList.contains('halloween-mode');
      if(changed&&theme!=='halloween')this.activate(false);
    },
    activate(enabled, animate = false) {
      enabled=enabled&&theme==='halloween';
      document.body.classList.toggle('halloween-mode', enabled);
      document.querySelector('.halloween-shortcut-bar').hidden = enabled||theme!=='halloween';
      document.querySelector('#halloween-scene').hidden = !enabled;
      clear();
      if (!enabled || !animate || reduced.matches) return;
      flight.innerHTML = Array.from({length:7},(_,i)=>`<span class="flying-bat bat-${i}">${bat}</span>`).join('');
      timer = setTimeout(clear, 2400);
    }
  };
}
