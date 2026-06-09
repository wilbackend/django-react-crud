import { useEffect, useState } from 'react'
import { createProduct, getProducts } from '../api/products'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

function ProductsPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((data) => setProducts(data))
    }, [])

    function handleCreateProduct(product) {
        createProduct(product).then((createdProduct) => {
            setProducts((currentProducts) => [...currentProducts, createdProduct])
        })
    }

    return (
        <section className="resource-section">
            <div className="section-header">
                <div>
                    <p className="eyebrow">Inventory</p>
                    <h1>Products</h1>
                </div>
                <span className="record-count">{products.length} products</span>
            </div>
            <ProductForm onCreateProduct={handleCreateProduct} />
            <ProductList products={products} />
        </section>
    )
}

export default ProductsPage
