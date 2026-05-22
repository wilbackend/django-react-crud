function CustomerList({ customers }) {
    return (
        <ul>
            {customers.map((customer) => (
                <li key={customer.id}>{customer.name}</li>
            ))}
        </ul>
    )
}

export default CustomerList
