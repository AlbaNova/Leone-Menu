// Native horizontal scrolling, with one decorative copy for a seamless loop.
// The original buttons remain the only products in the keyboard/accessibility order.
export function setupChristmasCarousel(section, translate) {
  const viewport = section.querySelector('#christmas-products');
  const controls = section.querySelector('.christmas-carousel-controls');
  const pauseButton = controls.querySelector('[data-carousel-pause]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let content = '', count = 0, cycle = 0, frame = 0, last = 0, position = 0;
  let visible = false, hovered = false, focused = false, pressed = false, touching = false, paused = false;
  let resumeAt = 0, resumeTimer;

  function labels() {
    controls.querySelector('[data-carousel-previous]').setAttribute('aria-label', translate('christmasPrevious'));
    controls.querySelector('[data-carousel-next]').setAttribute('aria-label', translate('christmasNext'));
    pauseButton.setAttribute('aria-label', translate(paused ? 'christmasPlay' : 'christmasPause'));
    pauseButton.setAttribute('aria-pressed', String(paused));
    pauseButton.textContent = paused ? '▶' : 'Ⅱ';
    pauseButton.hidden = reduced.matches;
    controls.hidden = count < 2;
  }
  function canRun() {
    return count > 1 && cycle > 0 && visible && !section.hidden && !document.hidden &&
      !reduced.matches && !paused && !hovered && !focused && !pressed && !touching &&
      !document.querySelector('#product-dialog')?.open && performance.now() >= resumeAt;
  }
  function tick(now) {
    frame = 0;
    if (!canRun()) return;
    if (last) {
      position = (position + Math.min(now - last, 50) * .028) % cycle;
      viewport.scrollLeft = position;
    }
    last = now;
    frame = requestAnimationFrame(tick);
  }
  function motion() {
    cancelAnimationFrame(frame); frame = 0; last = 0;
    position = viewport.scrollLeft;
    if (canRun()) frame = requestAnimationFrame(tick);
  }
  function rest(milliseconds = 2500) {
    resumeAt = performance.now() + milliseconds;
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(motion, milliseconds + 30);
    motion();
  }
  function layout() {
    if (!count || !viewport.clientWidth) { cycle = 0; motion(); return; }
    const width = viewport.clientWidth;
    const cardWidth = count === 1 ? width : width < 600 ? width - 24 : (width - 16) / 2;
    viewport.style.setProperty('--christmas-card-width', `${cardWidth}px`);
    const track = viewport.querySelector('[data-carousel-original]');
    cycle = track.getBoundingClientRect().width;
    if (count > 1 && viewport.scrollLeft >= cycle) viewport.scrollLeft %= cycle;
    motion();
  }
  const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; motion(); });
  observer.observe(viewport);
  new ResizeObserver(layout).observe(viewport);
  new MutationObserver(motion).observe(document.querySelector('#product-dialog'), {attributes:true, attributeFilter:['open']});
  reduced.addEventListener('change', () => { labels(); motion(); });
  document.addEventListener('visibilitychange', motion);
  section.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovered = true; motion(); } });
  section.addEventListener('pointerleave', () => { hovered = false; motion(); });
  section.addEventListener('focusin', () => { focused = true; motion(); });
  section.addEventListener('focusout', () => queueMicrotask(() => { focused = section.contains(document.activeElement); motion(); }));
  viewport.addEventListener('pointerdown', () => { pressed = true; motion(); }, {passive:true});
  viewport.addEventListener('touchstart', () => { touching = true; motion(); }, {passive:true});
  const touchEnd = event => { touching = event.touches.length > 0; rest(); };
  viewport.addEventListener('touchend', touchEnd, {passive:true});
  viewport.addEventListener('touchcancel', touchEnd, {passive:true});
  const release = () => { if (pressed) { pressed = false; rest(); } };
  window.addEventListener('pointerup', release, {passive:true});
  window.addEventListener('pointercancel', release, {passive:true});
  viewport.addEventListener('wheel', () => rest(), {passive:true});
  pauseButton.addEventListener('click', () => { paused = !paused; labels(); motion(); });
  for (const [selector, direction] of [['[data-carousel-previous]', -1], ['[data-carousel-next]', 1]]) {
    controls.querySelector(selector).addEventListener('click', () => {
      rest();
      const step = viewport.querySelector('.product-card').getBoundingClientRect().width + 16;
      const next = direction > 0 ? Math.floor((viewport.scrollLeft + .5) / step) + 1 : Math.ceil((viewport.scrollLeft - .5) / step) - 1;
      viewport.scrollLeft = ((next * step) % cycle + cycle) % cycle;
    });
  }
  return {
    render(html, total) {
      count = total; labels();
      if (content === html) { motion(); return; }
      content = html;
      viewport.innerHTML = count ? `<div class="christmas-track" data-carousel-original>${html}</div>` : html;
      viewport.classList.toggle('christmas-single', count === 1);
      if (count > 1) {
        const copy = viewport.firstElementChild.cloneNode(true);
        copy.removeAttribute('data-carousel-original');
        copy.setAttribute('aria-hidden', 'true');
        // Copies remain pointer-clickable, but never duplicate accessible buttons.
        for (const button of copy.querySelectorAll('button')) {
          const visual = document.createElement('div');
          visual.className = button.className; visual.dataset.id = button.dataset.id;
          visual.append(...button.childNodes); button.replaceWith(visual);
        }
        // Keep any future SVG references unique as well.
        for (const element of copy.querySelectorAll('[id]')) {
          const old = element.id, replacement = `christmas-copy-${old}`;
          element.id = replacement;
          for (const child of copy.querySelectorAll('*')) for (const attr of [...child.attributes]) {
            if (attr.value === `#${old}` || attr.value.includes(`url(#${old})`)) child.setAttribute(attr.name, attr.value.replaceAll(`#${old}`, `#${replacement}`));
          }
        }
        viewport.append(copy);
      }
      viewport.scrollLeft = 0; layout();
    }
  };
}
