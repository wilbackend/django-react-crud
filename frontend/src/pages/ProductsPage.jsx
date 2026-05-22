import { useEffect, useState } from 'react'
import { getProducts } from '../api/products'
import ProductList from '../components/ProductList'

function ProductsPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((data) => setProducts(data))
    }, [])

    return (
        <section>
            <h1>Products</h1>
            <ProductList products={products} />
        </section>
    )
}

export default ProductsPage
