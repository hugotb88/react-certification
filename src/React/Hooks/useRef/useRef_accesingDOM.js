/*
    In general, we want to let React handle all DOM manipulation.
    But there are some instances where useRef can be used without causing issues.
    In React, we can add a ref attribute to an element to access it directly in the DOM.

    Use useRef to focus the input:
*/
import { useRef } from "react";
import ReactDOM from "react-dom/client";

function UseRefAccesingDOM() {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}
export default UseRefAccesingDOM;