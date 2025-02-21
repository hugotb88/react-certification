/*
    const ref = useRef(initialValue)

    The useRef Hook is a built-in React Hook that returns a mutable reference object (ref) that persists across renders. 
    Unlike state variables, updating a ref does not trigger a component re-render.

    const refContainer = useRef(initialValue);

    - useRef returns an object { current: initialValue }.
    - The .current property can be updated without re-rendering the component.

    TRACKING STATE CHANGES
    - The useRef Hook can also be used to keep track of previous state values.
    - This is because we are able to persist useRef values between renders.

    useRef() only returns one item. It returns an Object called current.
    When we initialize useRef we set the initial value: useRef(0).
    It's like doing this: const count = {current: 0}. We can access the count by using count.current.
*/


// ================== Problem ===================== //
// If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.


// ================== Solution ===================== //
//To avoid this, we can use the useRef Hook.
/*
    useRef() only returns one item. It returns an Object called current.
    When we initialize useRef we set the initial value: useRef(0).
    It's like doing this: const count = {current: 0}. We can access the count by using count.current.
*/
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1; // here we counting every time we render but without re-render again to avoid the loop
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1> 
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// ================== Accessing DOM Elements ===================== //
/*
    In general, we want to let React handle all DOM manipulation.
    But there are some instances where useRef can be used without causing issues.
    In React, we can add a ref attribute to an element to access it directly in the DOM.
*/
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1; // here we counting every time we render but without re-render again to avoid the loop
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1> 
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// ================== Tracking State Changes ===================== //
/*
    The useRef Hook can also be used to keep track of previous state values.
    This is because we are able to persist useRef values between renders.
    This time we use a combination of useState, useEffect, and useRef to keep track of the previous state.
    In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.
*/
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef(""); //Here

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2> 
    </>
  );
}