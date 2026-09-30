import { hydrateIcons, escapeHTML as esc, money, request, icon, placeholderURL } from './shared.js';
import { languages, translate, productText } from './i18n.js';
hydrateIcons();
const languageKey = 'leone-menu-language';
const menuSource = document.querySelector('meta[name="menu-source"]')?.content || '/api/menu';
function initialLanguage() {
  const queryLanguage = new URL(location.href).searchParams.get('lang');
  if (Object.hasOwn(languages, queryLanguage)) return queryLanguage;
  try { const saved = localStorage.getItem(languageKey); if (Object.hasOwn(languages, saved)) return saved; } catch {}
  return 'zh';
}
let language = initialLanguage(), category = 'food', menu = null, query = '', lastPayload = '', openedId = null, connectionFailed = false;
const grid = document.querySelector('#products'), dialog = document.querySelector('#product-dialog');
const t = (key, values) => translate(language, key, values);
const price = value => money(value, menu.currency, languages[language].locale);
const allProducts = () => Object.values(menu?.groups || {}).flat();
const normalize = text => text.normalize('NFKC').toLocaleLowerCase().normalize('NFD').replace(/\p{M}/gu, '');
function applyLanguage() {
  document.documentElement.lang = languages[language].locale;
  document.title = t('pageTitle');
  document.querySelector('meta[name="description"]').content = t('metaDescription');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  for (const attribute of ['aria-label', 'placeholder', 'alt']) {
    document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(el => el.setAttribute(attribute, t(el.getAttribute(`data-i18n-${attribute}`))));
  }
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  render(); showConnectionState();
}
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => {
  language = button.dataset.language;
  try { localStorage.setItem(languageKey, language); } catch {}
  const url = new URL(location.href); url.searchParams.set('lang', language); history.replaceState(null, '', url);
  applyLanguage();
}));
function details(p) {
  const text = productText(p, language);
  document.querySelector('#product-detail').innerHTML = `<img class="detail-photo ${!p.available ? 'muted-image' : ''}" src="${esc(p.image || placeholderURL)}" alt="${esc(text.name)}"><div class="detail-copy"><div class="eyebrow">${esc(t('detailEyebrow'))}</div><h2 id="detail-title" lang="${text.nameLang}">${esc(text.name)}</h2><p lang="${text.descriptionLang}">${esc(text.description)}</p><div class="detail-bottom"><strong>${price(p.price)}</strong><span class="${p.available ? 'available-note' : 'unavailable-note'}">${esc(t(p.available ? 'available' : 'unavailable'))}</span></div><p class="detail-note">${esc(t('orderNote'))}</p></div>`;
  dialog.setAttribute('aria-labelledby', 'detail-title');
}
function render() {
  if (!menu) {
    document.querySelector('#category-title').textContent = t(`${category}Title`);
    document.querySelector('#category-description').textContent = t(`${category}Description`);
    return;
  }
  const source = query ? allProducts().filter(p => normalize([p.name, p.description, ...Object.values(p.translations || {}).flatMap(text => [text.name, text.description])].join(' ')).includes(query)) : menu.groups[category];
  document.querySelector('#category-title').textContent = query ? t('searchTitle') : t(`${category}Title`);
  document.querySelector('#category-description').textContent = query ? t('searchResults', { query: document.querySelector('#menu-search').value.trim() }) : t(`${category}Description`);
  document.querySelector('#result-count').textContent = t(source.length === 1 ? 'itemCountOne' : 'itemCount', { count: source.length });
  for (const key of ['food', 'drinks', 'desserts']) document.querySelector(`#${key}-count`).textContent = menu.groups[key].length;
  grid.innerHTML = source.length ? source.map(p => {
    const text = productText(p, language);
    return `<button class="product-card ${p.available ? '' : 'unavailable'}" data-id="${p.id}" aria-label="${esc(t('viewProduct', { name: text.name }))}${p.available ? '' : ', ' + esc(t('unavailable'))}"><div class="product-photo"><img src="${esc(p.image || placeholderURL)}" alt="${esc(text.name)}" loading="lazy">${!p.available ? `<span class="sold-out-badge">${esc(t('unavailable'))}</span>` : ''}<span class="card-open" aria-hidden="true">↗</span></div><div class="product-copy"><div class="product-title-row"><h4 lang="${text.nameLang}">${esc(text.name)}</h4><span class="product-price">${price(p.price)}</span></div><p lang="${text.descriptionLang}">${esc(text.description)}</p><div class="card-bottom">${p.available ? `<span class="available-dot"></span>${esc(t('cardNote'))}` : esc(t('backSoon'))}</div></div></button>`;
  }).join('') : `<div class="empty-state">${icon('search')}<h3>${esc(t(query ? 'emptySearchTitle' : 'emptyCategoryTitle'))}</h3><p>${esc(t(query ? 'emptySearchHint' : 'emptyCategoryHint'))}</p>${query ? `<button class="button secondary" id="clear-search">${esc(t('clearSearch'))}</button>` : ''}</div>`;
  document.querySelector('#clear-search')?.addEventListener('click', () => { query = ''; document.querySelector('#menu-search').value = ''; render(); });
  if (openedId && dialog.open) { const p = allProducts().find(p => p.id === openedId); if (p) details(p); else dialog.close(); }
}
document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click', () => {
  category = button.dataset.category; query = ''; document.querySelector('#menu-search').value = '';
  document.querySelectorAll('[data-category]').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', b === button ? 'true' : 'false'); }); render();
}));
document.querySelector('#menu-search').addEventListener('input', event => { query = normalize(event.target.value.trim()); render(); });
grid.addEventListener('click', event => { const button = event.target.closest('[data-id]'); if (!button) return; const p = allProducts().find(p => p.id === button.dataset.id); if (p) { openedId = p.id; details(p); dialog.showModal(); } });
document.querySelector('[data-close-dialog]').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { openedId = null; });
function showConnectionState() {
  const message = document.querySelector('#connection-message'); message.hidden = !connectionFailed;
  if (connectionFailed) {
    message.textContent = t(menu ? 'reconnect' : 'loadError');
    if (!menu) grid.innerHTML = `<div class="empty-state"><h3>${esc(t('pauseTitle'))}</h3><p>${esc(t('pauseHint'))}</p></div>`;
  }
}
async function refresh() {
  try { const data = await request(menuSource, { cache: 'no-cache' }); const payload = JSON.stringify(data); if (payload !== lastPayload) { menu = data; lastPayload = payload; render(); } connectionFailed = false; }
  catch { connectionFailed = true; }
  showConnectionState();
}
applyLanguage();
await refresh();
setInterval(() => { if (!document.hidden) refresh(); }, 15000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
