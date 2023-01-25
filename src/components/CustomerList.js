const CustomerList = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {props.customers.map(customer => {
                    return <tr key={customer.name}>
                        <td>{customer.name}</td>
                        <td>{customer.age}</td>
                        <td>{customer.location}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default CustomerList;