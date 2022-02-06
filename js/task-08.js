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

    const collectingFormData = {};
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        collectingFormData[name] = value;
    });
    console.log(collectingFormData);

    event.currentTarget.reset();
}
