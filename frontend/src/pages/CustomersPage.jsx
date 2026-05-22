import { useEffect, useState } from 'react'
import { getCustomers } from '../api/customers'
import CustomerForm from '../components/CustomerForm'
import CustomerList from '../components/CustomerList'

function CustomersPage() {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getCustomers().then((data) => setCustomers(data))
    }, [])

    return (
        <section>
            <h1>Customers</h1>
            <CustomerForm />
            <CustomerList customers={customers} />
        </section>
    )
}

export default CustomersPage
