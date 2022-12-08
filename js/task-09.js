function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorOutputEl = document.querySelector('.color');


const changeColorHandler = event => {

  const randomColor = getRandomHexColor();

  colorOutputEl.textContent = randomColor;

  bodyEl.setAttribute('style', `background-color: ${randomColor}`)
};

btnChangeColorEl.addEventListener('click', changeColorHandler);


