const products = [
    { id: 1, title: 'Notebook', price: 2000 },//мне кажется, что запятая возникает из-за того, что объекты в массиве отделены запятыми и функция сохраняет их при выводе. наверно можно заменить map на цикл и это поможет избежать запятых.
    { id: 2, title: 'Keyboard', price: 200 },
    { id: 3, title: 'Mouse', price: 100 },
    { id: 4, title: 'Gamepad', price: 87 },
];

const renderProduct = (title="not availible", price="for ask") => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
            </div>`
};

const render = productsList => {
    let map = productsList.map;
    document.querySelector('.products').innerHTML = map(item => renderProduct(item.title, item.price));//не знаю как усовершенствовать - webstorm предложил заменить переменную
};

render(products);