const inputRangeEl = document.querySelector('#font-size-control');

const outputText = document.querySelector('#text');


const changeFontSize = event => {
 
    outputText.setAttribute('style', `font-size: ${event.currentTarget.value}px`);
}

inputRangeEl.addEventListener('input', changeFontSize);



