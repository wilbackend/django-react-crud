import { useState } from 'react'

// Responsibility: collect product input and send it to ProductsPage.
function ProductForm({ onCreateProduct }) {
    // Local state keeps track of what the user types.
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    // Submit sends the product data upward; this component does not call the API.
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
        // The form triggers handleSubmit when the user clicks Create Product.
        <form className="entry-form" onSubmit={handleSubmit}>
            <label className="field">
                <span>Name</span>
                <input
                    type="text"
                    placeholder="Product name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </label>

            <label className="field">
                <span>Price</span>
                <input
                    type="number"
                    placeholder="0.00"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    min="0"
                    step="0.01"
                    required
                />
            </label>

            <button className="primary-action" type="submit">Create Product</button>
        </form>
    )

}
export default ProductForm
