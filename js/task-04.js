const valueRef = document.querySelector('#value')
const buttonDecrementRef = document.querySelector('[data-action="decrement"]')
const buttonIncrementRef = document.querySelector('[data-action="increment"]')


buttonDecrementRef.addEventListener('click', () => {
    valueRef.textContent = Number(valueRef.textContent) - 1;
})
buttonIncrementRef.addEventListener('click', () => {
   valueRef.textContent = Number(valueRef.textContent) + 1;
})