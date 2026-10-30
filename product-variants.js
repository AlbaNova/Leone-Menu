import { escapeHTML as esc, money } from './shared.js?v=ad2fde65e715b933';

export const portionLabels = {
  en: { pot: 'Pot', mug: 'Mug', whole: 'Whole', half: 'Half' },
  zh: { pot: '壶', mug: '杯', whole: '整份', half: '半份' },
  it: { pot: 'Caraffa', mug: 'Bicchiere', whole: 'Intera', half: 'Metà' },
  ja: { pot: 'ポット', mug: 'マグ', whole: 'ホール', half: 'ハーフ' },
  ko: { pot: '포트', mug: '머그', whole: '전체', half: '절반' }
};
export const portionLabel = (format, language = 'en') => (portionLabels[language] || portionLabels.en)[format] || format;
export const hasVariants = p => Array.isArray(p.variants) && p.variants.length > 0;
export const isAvailable = p => Boolean(p.available && (hasVariants(p) ? p.variants.some(v => v.available && v.quantity > 0) : p.quantity > 0));

// Public prices have no stock quantities or internal IDs.
export function publicPortions(p, mode) {
  if (!hasVariants(p)) return {};
  return { variants: p.variants.map(v => ({ format: v.format, price: v.price, available: Boolean(p.available && v.available && v.quantity > 0) }))
    .filter(v => mode !== 'hide' || v.available) };
}

export function portionPrices(p, currency, language = 'en', unavailableText = 'Unavailable') {
  const locale = { zh: 'zh-CN', en: 'en', it: 'it', ja: 'ja', ko: 'ko' }[language] || 'en';
  const value = amount => money(amount, currency, locale);
  return p.variants.map(v => `<span class="portion-price${v.available ? '' : ' portion-unavailable'}">${esc(portionLabel(v.format, language))} ${esc(value(v.price))}${v.available ? '' : `<small> (${esc(unavailableText)})</small>`}</span>`).join('<span class="portion-separator"> / </span>');
}
