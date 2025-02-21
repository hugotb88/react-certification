/*
    useState

    - The React useState Hook allows us to track state in a function component.
    - useState accepts an initial state and returns two values:
        The current state.
        A function that updates the state.

    Capabilities of useState 
    - Initializate state
    - Read state
    - Update state

    How we can use it?
    - We need to import it from 'import {useState} from "react"'

    What Can State Hold
    The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these.

    Updating Objects and Arrays in State
    - When state is updated, the entire state gets overwritten.
    - What if we only want to update the color of our car?
    - If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.

*/

// =========== Initialize state ============ //
import { useState } from "react";

function FavoriteColor() {
    const [color, setColor] = useState("")  // Initializing state with an empty String ""

    // We are destructuring the returned values form useState:
    //  color    -> Is the current state
    //  setColor -> Is the function that will update the state.
    // 
    // ** Note: names can be whatever you want
}

// =========== Read state ============ //
// We can now include our state anywhere in our component //
import { useState } from "react";

function FavoriteColor() {
    const [color, setColor] = useState("")

    return <h1> for the fucking useState copncept, the color is {color} </h1> //Here we are using 'color'
}

// =========== Update state ============ //
// We use the updater function to update the state //
import { useState } from "react";

function FavoriteColor() {
    const [color, setColor] = useState("")

    return (
        <>
            <h1> for the fucking useState copncept, the color is {color} </h1>
            <button
                type="button"
                onClick={() => setColor("blue")}  // Here we are using setColor as updater function
            >
                Change to Blue
            </button>
        </>
    );
}

// =========== Multiple hooks by property or one Hook by component?  ============ //

// Multiple Hooks
import { useState } from "react";
import ReactDOM from './react-dom/client';

function Car() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1976");
    const [color, setColor] = useState("White");

    return (
        <>
            <h1> My {brand} </h1>
            <p>
                Its a {color} {model} from {year}
            </p>
        </>
    );
}

// One Hook by object
import { useState } from "react";
import ReactDOM from './react-dom/client';

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1976",
        color: "white"
    });

    // Since we are using and object, the reference changes
    return (
        <>
            <h1> My {car.brand} </h1>
            <p>
                Its a {car.color} {car.model} from {car.year}
            </p>
        </>
    );
}


// =========== Scenario  ============ //
/* 
    We want to update only the 'color' of a car 
    If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.
    We can use the JavaScript spread operator to help us.
*/
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    //Here is where we update the color but we keep the rest of attributes
    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" }
        })
    }

    return (
        <>
            <h1> My {car.brand} </h1>
            <p>
                Its a {car.color} {car.model} from {car.year}
            </p>
            <button type="button" onClick={updateColor} >
                Change to Blue
            </button>
        </>
    )
}