/*
    Component used as example of a Textarea
*/
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function FormTextarea() {
    const [textarea, setTextarea] = useState(
        "Initial value of the Textarea, its content is in the value attribute."      
    );

    //To update the content when a change happens
    const handleChange = (event) =>{
        setTextarea(event.target.value)
    }

    return (
        <form>
            <textarea value={textarea} onChange={handleChange} />
        </form>
    )
}

export default FormTextarea;