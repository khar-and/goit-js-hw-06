const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsIngredients = [];
for (let i = 0; i < ingredients.length; i++) {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredients[i];
  itemEl.classList.add('item');
  itemsIngredients.push(itemEl);
}
const ingredientsListEL = document.querySelector('ul');
ingredientsListEL.append(...itemsIngredients);

