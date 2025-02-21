import { useState, createContext, useContext } from "react";
import Component2 from "./Component2";

const UserContext = createContext(); //Here the context is created.

/*
    Component where the information is created,
    the info need to be shared through nested components until the Component 5
*/
function Component1(){
    const[user, setUser] = useState("Hugo");

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 />
        </UserContext.Provider>
    );
}

export {UserContext, Component1};