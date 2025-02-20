import { useState } from "react";
import ReactDOM from 'react-dom/client'; 

/*
    Component used for Forms example in React
    This component uses the 'useState' Hook
*/
function MyForm() {
    const [name, setName] = useState("");

    return(
        <form>
            <label> Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={ (e) => setName(e.target.value)}
                />
            </label>
        </form>
    );
}

export default MyForm;
