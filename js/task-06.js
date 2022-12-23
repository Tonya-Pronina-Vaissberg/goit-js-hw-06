const inputEl = document.querySelector('#validation-input');

const isValid = event => {
    const inputLength = `${event.currentTarget.value.length}`;

    if (inputLength === inputEl.getAttribute('data-length')) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
};

inputEl.addEventListener('blur', isValid);