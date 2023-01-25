import CustomerList from "./CustomerList";
import List from "../List";
import { useState } from "react";

const SearchCustomer = (props) => {

    const [customers, setCustomers] = useState(List);
    const [searchValue, setSearchValue] = useState('');

    const customerSearchHandler = (event) => {
        setSearchValue(event.target.value);
        setCustomers(List.filter(customer => {
            return customer.name.slice(0, searchValue.length).toUpperCase() === searchValue.toUpperCase() 
                || customer.location.slice(0, searchValue.length).toUpperCase() === searchValue.toUpperCase();
        }))
    }

    return (
        <div style={{margin: '100px'}}>
            <input type="text"  value={searchValue} onChange={customerSearchHandler} />

            {
                customers.length !== 0 ? 
                    <CustomerList customers={customers}/>
                    :
                    <p>No results found! </p>
            }
        </div>
    )
}

export default SearchCustomer;