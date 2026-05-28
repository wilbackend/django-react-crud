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
        <section>
            <h1>Products</h1>
            <ProductForm onCreateProduct={handleCreateProduct} />
            <ProductList products={products} />
        </section>
    )
}

export default ProductsPage
