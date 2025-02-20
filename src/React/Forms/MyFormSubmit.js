import { useState } from 'react';
import ReactDOM from 'react-dom/client';

/*
    Component used for Forms example in React
    This component uses the 'useState' Hook

    You can control the submit action by adding an event handler in the onSubmit attribute for the <form>
    Add a submit button and an event handler in the onSubmit attribute
*/
function MyFormSubmit() {
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

export default MyFormSubmit