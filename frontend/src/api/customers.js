export function getCustomers() {
    return fetch('/api/customers/').then((response) => response.json())
}
