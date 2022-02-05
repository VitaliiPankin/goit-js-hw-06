function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color и
//   выводит значение цвета в span.color.

const btnRef = document.querySelector('.change-color');
const spanColorName = document.querySelector('.color');
const bodyRef = document.querySelector('body');
const styleRef = document.querySelector('style');

btnRef.addEventListener('click', changeBgColor);

function changeBgColor(event) {
    event.preventDefault();
    spanColorName.textContent = getRandomHexColor();
    bodyRef.classList.add('bgcolor');
    const textBgStyle = `.bgcolor{background-color: ${getRandomHexColor()};}`;
    styleRef.insertAdjacentHTML('beforeend', textBgStyle);
}
