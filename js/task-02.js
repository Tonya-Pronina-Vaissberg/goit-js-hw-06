const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const firstIngredientEl = document.createElement('li');
firstIngredientEl.textContent = ingredients[0];
firstIngredientEl.classList.add('item');
console.log(firstIngredientEl);

const scndIgredientEl = document.createElement('li');
scndIgredientEl.textContent = ingredients[1];
scndIgredientEl.classList.add('item');
console.log(scndIgredientEl);
 
const thrdIgredientEl = document.createElement('li');
thrdIgredientEl.textContent = ingredients[2];
thrdIgredientEl.classList.add('item');
console.log(thrdIgredientEl);

const frthIgredientEl = document.createElement('li');
frthIgredientEl.textContent = ingredients[3];
frthIgredientEl.classList.add('item');
console.log(frthIgredientEl);

const ffthIgredientEl = document.createElement('li');
ffthIgredientEl.textContent = ingredients[4];
ffthIgredientEl.classList.add('item');
console.log(ffthIgredientEl);

const sxthIgredientEl = document.createElement('li');
sxthIgredientEl.textContent = ingredients[5];
sxthIgredientEl.classList.add('item');
console.log(sxthIgredientEl);

const ulIngredientsEl = document.querySelector('#ingredients');

ulIngredientsEl.append(firstIngredientEl, scndIgredientEl, thrdIgredientEl, frthIgredientEl, ffthIgredientEl, sxthIgredientEl);