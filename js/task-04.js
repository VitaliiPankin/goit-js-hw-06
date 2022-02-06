const valueRef = document.querySelector('#value');
const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');

let count = 0;
buttonDecrementRef.addEventListener('click', () => {
    valueRef.textContent = count -= 1;
});
buttonIncrementRef.addEventListener('click', () => {
    valueRef.textContent = count += 1;
});
