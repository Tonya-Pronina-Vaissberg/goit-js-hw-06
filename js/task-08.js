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

    if (email === '' || password === '') {
        return alert('Enter field value!');
    } else {
        console.log(formDataObject);
    }

    event.currentTarget.reset();
    
};

formEl.addEventListener('submit', isValid);
