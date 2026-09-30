export const foodSections = ['first_courses', 'pizza', 'mains', 'focaccia', ''];
export function validFoodSection(value) { return foodSections.includes(value); }
export function groupedFood(products) {
  return foodSections.map(section => ({ section, products: products.filter(p => (validFoodSection(p.section) ? p.section : '') === section) })).filter(group => group.products.length);
}
