const formEl = document.querySelector('.login-form');


const isValid = event => {
    event.preventDefault();

    const formDataElements = event.currentTarget.elements;
    
    const email = formDataElements.email.value;
    const password = formDataElements.password.value;

    const formDataObject = {
        email,
        password,
    };
    console.log(formDataObject);

    if (email === '' || password === '') {
        return alert('Enter field value!');
    }

    event.currentTarget.reset();
    
};

formEl.addEventListener('submit', isValid);
