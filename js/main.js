const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Keyboard', price: 200 },
    { id: 3, title: 'Mouse', price: 100 },
    { id: 4, title: 'Gamepad', price: 87 },
];

const renderProduct = (product) => {
    return `<div class="product-item">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
            </div>`
};

const renderPage = productsList => {
    document.querySelector('.products').innerHTML = productsList.map(product => renderProduct(product)).join('');
}

renderPage(products);