function ProductList({ products }) {
    if (products.length === 0) {
        return <p className="empty-state">No products yet.</p>
    }

    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ProductList
