import { escapeHTML as esc, money } from './shared.js?v=89f602b11b24f1fb';
import { translate, languages } from './i18n.js?v=89f602b11b24f1fb';

export const hasDiscount = p => !(p.variants?.length) && Number.isFinite(p.originalPrice) &&
  Number.isFinite(p.price) && p.price >= 0 && p.originalPrice > p.price;

// The actual selling price remains `price`; the optional reference price is display-only.
export const publicDiscount = p => hasDiscount(p) ? { originalPrice: p.originalPrice } : {};

export function productPrice(p, currency, language = 'en') {
  const value = amount => esc(money(amount, currency, languages[language]?.locale || 'en'));
  if (!hasDiscount(p)) return value(p.price);
  const t = (key, values) => esc(translate(language, key, values));
  const saved = Math.round((p.originalPrice - p.price) * 100) / 100;
  return `<span class="offer-prices"><del class="original-price"><span class="sr-only">${t('originalPrice')} </span>${value(p.originalPrice)}</del><span class="sale-price"><span class="sr-only">${t('salePrice')} </span>${value(p.price)}</span><span class="offer-saving">${t('saveAmount', { amount: money(saved, currency, languages[language]?.locale || 'en') })}</span></span>`;
}
