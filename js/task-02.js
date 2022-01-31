const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

// 1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2. Добавит название ингредиента как его текстовое содержимое.
// 3. Добавит элементу класс item.
// 4. После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredientsEl = document.querySelector('#ingredients');

    

const listEl =  ingredients.map((ingredient) => {
    const item = document.createElement('li')
    item.classList.add('item')
    item.textContent = ingredient
    
    return item;
});

ingredientsEl.append(...listEl)


