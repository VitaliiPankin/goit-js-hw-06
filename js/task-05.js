const inputRef = document.querySelector('#name-input');
const valueRef = document.querySelector('#name-output');
console.dir(inputRef);

// inputRef.addEventListener("input", (event) => {
//     if (event.currentTarget.value === '') {
//       return  valueRef.textContent = "Anonymous"
//     }
//     return valueRef.textContent = event.currentTarget.value
// })

inputRef.addEventListener('input', event => {
    const eventValue = event.currentTarget.value;

    eventValue === ''
        ? (valueRef.textContent = 'Anonymous')
        : (valueRef.textContent = event.currentTarget.value);
});
