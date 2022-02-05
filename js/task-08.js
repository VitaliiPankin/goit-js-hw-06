const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail === '' || password === '') {
        return alert('Все поля должны быть заполнены!');
    }

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        console.log(name, value);
    });

    event.currentTarget.reset();
}
