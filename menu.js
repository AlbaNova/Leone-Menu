import { hydrateIcons, escapeHTML as esc, money, request, icon, placeholderURL, productImage } from './shared.js?v=74453b2ed6a1971c';
import { languages, translate, productText } from './i18n.js?v=74453b2ed6a1971c';
import { groupedFood, isPizzaSection } from './food-sections.js?v=74453b2ed6a1971c';
import { hasVariants, portionPrices } from './product-variants.js?v=74453b2ed6a1971c';
import { setupHalloween } from './halloween.js?v=74453b2ed6a1971c';
hydrateIcons();
const halloween = setupHalloween();
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
const displayedPrice = p => hasVariants(p) ? portionPrices(p, menu.currency, language, t('unavailable')) : price(p.price);
const allProducts = () => [...new Map(Object.entries(menu?.groups || {}).filter(([key])=>key!=='halloween'||menu?.theme==='halloween').flatMap(([,items])=>items).map(p => [p.id, p])).values()];
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
  document.querySelector('#product-detail').innerHTML = `${productImage(p.image, text.name, `detail-photo ${!p.available ? "muted-image" : ""}`, "eager")}<div class="detail-copy"><div class="eyebrow">${esc(t('detailEyebrow'))}</div><h2 id="detail-title" lang="${text.nameLang}">${esc(text.name)}</h2><p lang="${text.descriptionLang}">${esc(text.description)}</p><div class="detail-bottom"><strong class="${hasVariants(p) ? 'portion-prices' : ''}">${displayedPrice(p)}</strong><span class="${p.available ? 'available-note' : 'unavailable-note'}">${esc(t(p.available ? 'available' : 'unavailable'))}</span></div><p class="detail-note">${esc(t('orderNote'))}</p></div>`;
  dialog.setAttribute('aria-labelledby', 'detail-title');
}
function render() {
  halloween.setTheme(menu?.theme||'classic');
  if(category==='halloween'&&menu?.theme!=='halloween') {
    category='food';
    document.querySelectorAll('[data-category]').forEach(b=>{const active=b.dataset.category===category;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  }
  if (!menu) {
    document.querySelector('#category-title').textContent = t(`${category}Title`);
    document.querySelector('#category-description').textContent = t(`${category}Description`);
    return;
  }
  const source = query ? allProducts().filter(p => normalize([p.name, p.description, ...Object.values(p.translations || {}).flatMap(text => [text.name, text.description])].join(' ')).includes(query)) : (menu.groups[category] || []);
  document.querySelector('#category-title').textContent = query ? t('searchTitle') : t(`${category}Title`);
  document.querySelector('#category-description').textContent = query ? t('searchResults', { query: document.querySelector('#menu-search').value.trim() }) : t(`${category}Description`);
  document.querySelector('#result-count').textContent = t(source.length === 1 ? 'itemCountOne' : 'itemCount', { count: source.length });
  for (const key of ['food', 'drinks', 'desserts', 'products', 'halloween']) document.querySelector(`#${key}-count`).textContent = (menu.groups[key] || []).length;
  const renderProduct = p => {
    const text = productText(p, language);
    const titleTag = !query && category === 'food' && isPizzaSection(p.section) ? 'h6' : 'h4';
    return `<button class="product-card ${p.available ? '' : 'unavailable'}" data-id="${p.id}" aria-label="${esc(t('viewProduct', { name: text.name }))}${p.available ? '' : ', ' + esc(t('unavailable'))}"><div class="product-photo">${productImage(p.image, text.name)}${!p.available ? `<span class="sold-out-badge">${esc(t('unavailable'))}</span>` : ''}<span class="card-open" aria-hidden="true">↗</span></div><div class="product-copy"><div class="product-title-row"><${titleTag} lang="${text.nameLang}">${esc(text.name)}</${titleTag}>${hasVariants(p) ? '' : `<span class="product-price">${price(p.price)}</span>`}</div>${hasVariants(p) ? `<div class="product-price portion-prices">${displayedPrice(p)}</div>` : ''}<p lang="${text.descriptionLang}">${esc(text.description)}</p><div class="card-bottom">${p.available ? `<span class="available-dot"></span>${esc(t('cardNote'))}` : esc(t('backSoon'))}</div></div></button>`;
  };
  const useSections = !query && category === 'food' && source.some(p => p.section);
  let pizzaHeadingShown = false;
  const renderGroup = group => {
    const pizza = isPizzaSection(group.section);
    const parentHeading = pizza && !pizzaHeadingShown ? `<h4 class="food-section-heading" data-pizza-section>${esc(t('section_pizza'))}</h4>` : '';
    if (pizza) pizzaHeadingShown = true;
    const tag = pizza ? 'h5' : 'h4';
    return `${parentHeading}<${tag} class="${pizza ? 'pizza-section-heading' : 'food-section-heading'}" data-food-section="${group.section}">${esc(t(`section_${group.section || 'other'}`))}</${tag}>${group.products.map(renderProduct).join('')}`;
  };
  grid.innerHTML = source.length ? useSections ? groupedFood(source).map(renderGroup).join('') : source.map(renderProduct).join('') : `<div class="empty-state">${icon('search')}<h3>${esc(t(query ? 'emptySearchTitle' : category === 'products' ? 'productsEmptyTitle' : 'emptyCategoryTitle'))}</h3><p>${esc(t(query ? 'emptySearchHint' : category === 'products' ? 'productsEmptyHint' : 'emptyCategoryHint'))}</p>${query ? `<button class="button secondary" id="clear-search">${esc(t('clearSearch'))}</button>` : ''}</div>`;
  document.querySelector('#clear-search')?.addEventListener('click', () => { query = ''; document.querySelector('#menu-search').value = ''; render(); });
  if (openedId && dialog.open) { const p = allProducts().find(p => p.id === openedId); if (p) details(p); else dialog.close(); }
}
document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click', () => {
  if(button.dataset.category==='halloween'&&menu?.theme!=='halloween')return;
  const changed = category !== button.dataset.category;
  category = button.dataset.category; halloween.activate(category === 'halloween', changed); query = ''; document.querySelector('#menu-search').value = '';
  document.querySelectorAll('[data-category]').forEach(b => { const active=b.dataset.category===category; b.classList.toggle('active', active); b.setAttribute('aria-pressed', active ? 'true' : 'false'); }); render();
  if (category === 'halloween' && changed) document.querySelector('#halloween-scene').scrollIntoView({behavior:'instant',block:'start'});
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
