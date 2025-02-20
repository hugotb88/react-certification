/*
    Just like in HTML, React uses forms to allow users to interact with the web page.
*/
function MyForm() {
    return (
        <form>
            <label>Enter your name:
                <input type="text" />
            </label>
        </form>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

// This will work as normal, the form will submit and the page will refresh.
// But this is generally not what we want to happen in React.
// We want to prevent this default behavior and let React control the form.

// ============================================================================== //

// ============================= Handling Forms ==================================//
/*
    Handling forms is about how you handle the data when it changes value or gets submitted.
    In HTML, form data is usually handled by the DOM.

    IN REACT, FORM DATA IS USUALLY HANDLED BY THE COMPONENTS.
    WHEN THE DATA IS HANDLED BY THE COMPONENTS, ALL THE DATA IS STORED IN THE COMPONENT STATE.

    You can control changes by adding event handlers in the onChange attribute.
    We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.
*/
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
    const [name, setName] = useState("");

    return (
        <form>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);


// ============================= Submitting Forms ==================================//
/*
    You can control the submit action by adding an event handler in the onSubmit attribute for the <form>:
*/
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

// ============================= Multiple Input Forms ==================================//
/*
    You can control the values of more than one input field by adding a name attribute to each element.
    We will initialize our state with an empty object.
    To access the fields in the event handler use the event.target.name and event.target.value syntax.
    To update the state, use square brackets [bracket notation] around the property name.
*/
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
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
            <input type="submit" />
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

// ==================================================================================== //

// ==================================== Textarea ====================================== //
/*
    The textarea element in React is slightly different from ordinary HTML.
    In HTML the value of a textarea was the text between the start tag <textarea> and the end tag </textarea>.

    In React the value of a textarea is placed in a value attribute. We'll use the useState Hook to manage the value of the textarea
*/
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
    );

    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    return (
        <form>
            <textarea value={textarea} onChange={handleChange} />
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);