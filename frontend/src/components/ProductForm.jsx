import { useState } from 'react'

function ProductForm() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    return (
        <form>
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