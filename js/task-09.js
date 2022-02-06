function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color и
//   выводит значение цвета в span.color.

const btnRef = document.querySelector('.change-color');
const spanColorName = document.querySelector('.color');

btnRef.addEventListener('click', changeBgColor);

function changeBgColor(event) {
    const color = getRandomHexColor();
    spanColorName.textContent = color;
    document.body.style.background = color;
}
