/*
    useContext

    React Context is a way to manage state globally.
    It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

    'const value = useContext(SomeContext)'
    
    Problem
    State should be held by the highest parent component in the stack that requires access to the state.
    To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
    To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

    Conclusions
    Basically, it allows us to share data globally, just like the Spring context,
    instead of pass the data using props through a lot of components we can use the context
*/


// Example of the problem, passing 'props' through nested components from Component 1 to Component 5
// Some of the Components (2 and 4) don't need the state actually
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Component1() {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </>
    );
}

function Component2({ user }) {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 user={user} />
        </>
    );
}

function Component3({ user }) {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 user={user} />
        </>
    );
}

function Component4({ user }) {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 user={user} />
        </>
    );
}

function Component5({ user }) {
    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}


// ========= The Solution, create CONTEXT ============ //
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext()

// Next, use the Context Provider, wrap child Components in the context Provider and supply the state value.
function Component1() {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </UserContext.Provider>
    );
}
// Now, all the components in this tree will have access to the user context


// ======== useContext Hook ============= //
import { useState, createContext, useContext } from "react";

function Component5(){
    const user = useContext(UserContext);

    return(
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}