export function getProducts() {
    return fetch('/api/products/').then((response) => response.json())
}

export function createProduct(product) {
    return fetch('/api/products/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    }).then((response) => response.json())
}
