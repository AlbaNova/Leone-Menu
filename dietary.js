export const dietaryValues = ['', 'vegetarian', 'vegan'];
export const validDietary = value => dietaryValues.includes(value);
const labels = {
  zh: { vegan: '纯素', vegetarian: '素食' },
  en: { vegan: 'Vegan', vegetarian: 'Vegetarian' },
  it: { vegan: 'Vegano', vegetarian: 'Vegetariano' },
  ja: { vegan: 'ヴィーガン', vegetarian: 'ベジタリアン' },
  ko: { vegan: '비건', vegetarian: '베지테리언' }
};
export function dietaryLabel(value, language = 'en') {
  return validDietary(value) ? (labels[language] || labels.en)[value] || '' : '';
}
export function dietaryBadge(value, language = 'en') {
  const label = dietaryLabel(value, language);
  return label ? `<span class="dietary-badge" data-dietary="${value}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 3C9 3 3 8 5 15c2 6 13 5 15-12Z"/><path d="M4 21 15 10"/></svg><span>${label}</span></span>` : '';
}
