const inputEl = document.querySelector('#validation-input');

const isValid = event => {
    if (event.currentTarget.value.length == inputEl.getAttribute('data-length')) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
};

inputEl.addEventListener('blur', isValid);