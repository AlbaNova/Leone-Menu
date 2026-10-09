export const foodSections = ['first_courses', 'pizza_classic', 'pizza_special', 'mains', 'sides', 'focaccia', ''];
// Preserve compatibility with products and older clients using the original pizza section.
export function validFoodSection(value) { return value === 'pizza' || foodSections.includes(value); }
export function foodSection(value) { return value === 'pizza' ? 'pizza_classic' : foodSections.includes(value) ? value : ''; }
export function isPizzaSection(value) { return ['pizza_classic', 'pizza_special'].includes(foodSection(value)); }
export function groupedFood(products) {
  return foodSections.map(section => ({ section, products: products.filter(p => foodSection(p.section) === section) })).filter(group => group.products.length);
}
