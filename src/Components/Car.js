/*
    Components
    
    -Components are like functions that return HTML elements.
    -There are 2 types of Components, Class Components and Function Components

    
    Note **  In older React code bases, you may find Class components primarily used. 
    It is now suggested to use Function components along with Hooks, which were added in React 16.8. 
    There is an optional section on Class components for your reference.
*/

//Class Component
class Car extends React.Component {
    render(){
        return <h2>Hi, i am a fucking Autobot.</h2>
    }
}

//Function Component
function Car() {
    return <h2>Hi, i am a fucking Decepticon</h2>
}


// To use any of them
import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js'; //This import is important, needed when we want ot use our components in other place

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

// ---------------------------------------------------------------- //
/*
        Props

    - Components can be passed as 'props', which stands for properties.
    - Props are like function arguments, and you send them into the component as attributes.
*/
function Car2(props) {
    return <h2> I am another type of fucking boring car, my color is {props.color}</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car2 color="Red" />);


// ---------------------------------------------------------------- //
/*
        Components in Components

    - We can refer components inside of other components.
*/
function Car3(){
    return <h2>Another fucking car?, yes, another one</h2>
}

function Garage(){
    return (
        <>
            <h1>Who lives in my Garage?</h1>
            <Car3/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);