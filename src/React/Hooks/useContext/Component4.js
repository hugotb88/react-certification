import { useState, createContext, useContext } from "react";
import Component5 from "./Component5";

/*
    This Component has the info shared
    instead to shared with Component5, the info is already in the context
*/
function Component4(){
    return (
        <>
            <h1>Component 4</h1>
            <Component5 />
        </>
    );
}

export default Component4;