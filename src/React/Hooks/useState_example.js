import { useState } from "react";
import ReactDOM from "react-dom/client";

/*
    useState example
*/
function CarUseState(){
    const [carUseState, setCarUseState] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    //Here is where we update the color but we keep the rest of attributes
    const updateColor = () => {
        setCarUseState(previousState => {
            return { ...previousState, color: "blue" }
        })
    }

    return (
        <>
            <h1> My {carUseState.brand} </h1>
            <p>
                Its a {carUseState.color} {carUseState.model} from {carUseState.year}
            </p>
            <button type="button" onClick={updateColor} >
                Change to Blue
            </button>
        </>
    )
}

export default CarUseState;