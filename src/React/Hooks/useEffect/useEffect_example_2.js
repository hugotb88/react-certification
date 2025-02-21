import { useState, useEffect } from "react";

/*
    Second example of useEffect, this contain a parameter to control when should run again
    Hook that is dependent on a variable. If the count variable updates, the effect will run again
*/
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

export default Counter;