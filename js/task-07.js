const inputRef = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

textSize.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener('input', event => {
    textSize.style.fontSize = `${event.currentTarget.value}px`;
});
