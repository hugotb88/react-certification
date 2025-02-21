/*
    useEffects

    - The 'useEffect' Hook allows you to perform side effects in your components.
    - Some examples of side effects are: fetching data, directly updating the DOM, and timers.
    - 'useEffect' accepts two arguments. THE SECOND ARGUMENT IS OPTIONAL.
    - useEffect(<function>, <dependency>)

    useEffect is a React Hook that lets you synchronize a component with an external system.
    
    useEffect(() => {
        // Side effect logic goes here
        return () => {
            // Cleanup logic (optional)
        };
    }, [dependencies]);

*/

// =========== Timer Example ============ //
// This example makes the timer infinite, because we did not include the second parameter in the useEffect hook
/*
   
    OPTION 1:
    useEffect(() => {
       //Runs on every render
    });

    OPTION 2:
    useEffect(() => {
        //Runs only on the first render
    }, []);

    OPTION 3:
    useEffect(() => {
        //Runs on the first render
        //And any time any dependency value changes
    }, [prop, state]);

*/

//OPTION 1:
import { useState, useEffect } from "react";

function Timer() {
    const [count, setCount] = useState(0);

    // Increments the count every second
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000); // intermitent every second
    },); //we did not indicate a dependency as second parameter of the hook


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



// =========== Timer FIXED Example ============ //
// OPTION 2
// Will run only once
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []); // <- add empty brackets here

    return <h1>I've rendered {count} times!</h1>;
}


// =========== Timer FIXED Example ============ //
// OPTION 3
//Example that is dependent on a variable. If the count variable updates, the effect will run again
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    );
}


/*  
    Taking the following structure ion consideration

    useEffect(() => {
        // Side effect logic goes here
        return () => {
            // Cleanup logic (optional)
        };
    }, [dependencies]);

    We can add a return clause to clean up de logic, this is optional, but is recommended
    to reduce memory
*/
function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => { // Side effect logic
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer) // clean up logic
    }, []); // Parameters control with and empty array

    return <h1>I've rendered {count} times!</h1>;
}
