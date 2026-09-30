import { menuArt } from './menu-art.js';
export const icons = {
  food: '<path d="M5 3v7m3-7v7M3 3v5a4 4 0 0 0 8 0V3M7 12v9M20 21V3c-5 3-5 10 0 10"/>',
  coffee: '<path d="M4 8h12v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm12 1h2a3 3 0 0 1 0 6h-2M3 22h16M7 2v2m6-2v2"/>',
  dessert: '<path d="m3 11 10-8 8 8H3Zm0 0v9h18v-9M3 15c3 4 6-3 9 0s6-3 9 0M13 3V1"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  settings: '<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-3-5h6l1 3 3 1 2 5-2 5-3 1-1 3H9l-1-3-3-1-2-5 2-5 3-1 1-3Z"/>',
  link: '<path d="m10 14 4-4m-5 6-2 2a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2 0 2-2a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0"/>',
  edit: '<path d="m15 4 5 5M4 20l5-1L21 7a2 2 0 0 0-5-5L4 14v6Z"/>',
  upload: '<path d="M12 16V3m-5 5 5-5 5 5M4 15v6h16v-6"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="2"/><path d="m3 17 6-6 4 4 3-3 5 5"/>',
  logout: '<path d="M9 4H4v16h5m6-12 5 4-5 4m-6-4h11"/>',
};
export const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.food}</svg>`;
export const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
export const money = (value, currency = 'CNY', locale = 'en') => new Intl.NumberFormat(locale, { style: 'currency', currency, currencyDisplay: 'narrowSymbol', minimumFractionDigits: Number.isInteger(value) ? 0 : 2, maximumFractionDigits: 2 }).format(value);
export function hydrateIcons(parent = document) { parent.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); }); }
export async function request(url, options = {}) {
  const response = await fetch(url, { ...options, headers: { 'Content-Type': 'application/json', ...options.headers } });
  const result = await response.json();
  if (!response.ok) { const e = new Error(result.error || 'Unable to complete the request.'); e.status = response.status; throw e; }
  return result;
}
export const placeholderURL = new URL('./placeholder.svg', import.meta.url).href;
let illustrationId = 0;
export function productImage(source, alt = '', className = '', loading = 'lazy') {
  const image = source || placeholderURL;
  const [file, key] = image.split('#');
  const viewport = /(?:^|\/)assets\/leone-menu\.png$/.test(file) && menuArt[key];
  if (viewport) {
    const clip = `menu-illustration-${++illustrationId}`;
    return `<svg class="menu-art ${escapeHTML(className)}" viewBox="${viewport.join(' ')}" role="img" aria-label="${escapeHTML(alt)}" focusable="false" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="${clip}" clipPathUnits="userSpaceOnUse"><rect x="${viewport[0]}" y="${viewport[1]}" width="${viewport[2]}" height="${viewport[3]}" /></clipPath></defs><image href="${escapeHTML(file)}" width="1060" height="1484" clip-path="url(#${clip})" /></svg>`;
  }
  const doodleClass = /\/assets\/[a-z0-9-]+-doodle\.png$/.test(file) ? ' dish-doodle' : '';
  return `<img class="${escapeHTML(className)}${doodleClass}" src="${escapeHTML(image)}" alt="${escapeHTML(alt)}" loading="${loading}">`;
}
document.addEventListener('error', event => { if (event.target instanceof HTMLImageElement && event.target.src !== placeholderURL) event.target.src = placeholderURL; }, true);
