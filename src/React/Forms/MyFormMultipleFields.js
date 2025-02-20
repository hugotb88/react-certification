import { useState } from "react";
import ReactDOM from "react-dom/client";
/*
    You can control the values of more than one input field by adding a name attribute to each element.
    We will initialize our state with an empty object.
    To access the fields in the event handler use the event.target.name and event.target.value syntax.
    To update the state, use square brackets [bracket notation] around the property name.

    Note: We use the same event handler function for the three input fields, 
    we could write one event handler for each, 
    but this gives us much cleaner code and is the preferred way in React.
*/
function MyFormMultipleFields() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your NSS:
                <input
                    type="text"
                    name="nss"
                    value={inputs.nss || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form >
    )
}


export default MyFormMultipleFields