import { useState, createContext, useContext } from "react";
import { UserContext } from "./Component1";

/*
    This Component needs the info in the Context
    instead to shared with Component3, the info is already in the context
*/
function Component5(){
    const user = useContext(UserContext); //Loading the context

    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}

export default Component5;