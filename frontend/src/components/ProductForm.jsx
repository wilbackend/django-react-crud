import { useState } from 'react'

function ProductForm({ onCreateProduct }) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        onCreateProduct({
            name: name,
            price: price,
        })

        setName('')
        setPrice('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />

            <button type="submit">Create Product</button>
        </form>
    )

}
export default ProductForm
