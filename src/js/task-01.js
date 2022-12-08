const ulCategoriesEl = document.querySelector('#categories');
console.log('Number of categories:', ulCategoriesEl.childElementCount);

const itemEl = document.querySelectorAll('.item');

const itemArray = [...itemEl];

itemArray.map(element => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Element:', element.lastElementChild.childElementCount)
});
