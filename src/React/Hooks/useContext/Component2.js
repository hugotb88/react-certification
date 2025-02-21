import { useState, createContext, useContext } from "react";
import Component3 from "./Component3";

/*
    This Component has the info shared
    instead to share it with Component3, the info is already in the context
*/
function Component2(){
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    );
}

export default Component2;