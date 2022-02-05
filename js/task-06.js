const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
    const dataSet = Number(event.currentTarget.dataset.length);
    const valueLength = event.currentTarget.value.length;

    if (dataSet === valueLength) {
        console.log('yes');
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    } else {
        console.log('no');
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
});
