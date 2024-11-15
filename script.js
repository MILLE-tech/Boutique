let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const products = [
        { id: 1, name: 'Ordinateur Portable', price: 799.99 },
        { id: 2, name: 'Smartphone', price: 599.99 },
        { id: 7, name: 'Canapé Confort', price: 499.99 },
        { id: 8, name: 'Lampe Design', price: 79.99 },
        { id: 9, name: 'T-shirt en Coton', price: 19.99 },
        { id: 10, name: 'Jean Classique', price: 39.99 }
    ];    

    const product = products.find((p) => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} a été ajouté au panier.`);
        updateCart();
    }
}

function updateCart() {
    const cartContainer = document.getElementById('cart');
    const cartTotal = document.getElementById('cart-total');
    if (cartContainer && cartTotal) {
        cartContainer.innerHTML = cart
            .map((item, index) => `<div>${item.name} - ${item.price.toFixed(2)} €</div>`)
            .join('');
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = `${total.toFixed(2)} €`;
    }
}

updateCart();
