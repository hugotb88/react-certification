import { useState, createContext, useContext } from "react";
import Component4 from "./Component4";

/*
    This Component has the info shared
    instead to share it with Component4, the info is already in the context
*/
function Component3(){
    return (
        <>
            <h1>Component 3</h1>
            <Component4 />
        </>
    );
}

export default Component3;