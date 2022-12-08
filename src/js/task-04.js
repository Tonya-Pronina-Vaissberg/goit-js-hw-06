const counterValueEl = document.querySelector('#value');

let counterValue = 0;

const btnDescrmntEl = document.querySelector('[data-action="decrement"]');
btnDescrmntEl.addEventListener('click', ()=>{
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
});

const btnInscrmntEl = document.querySelector('[data-action="increment"]')
btnInscrmntEl.addEventListener('click', ()=>{
    counterValue += 1;
    counterValueEl.textContent = counterValue;
});





