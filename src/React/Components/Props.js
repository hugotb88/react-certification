/*
    Props

    - React Props are like function arguments in JavaScript and attributes in HTML.
    - To send props into a component, use the same syntax as HTML attributes:

*/

// Example, add a brand attribute to the Car element:
const myElement = <Car brand="Ford"/>

// Then, the component receives the argument as a props object.
// Using the Brand attribute in the component.
function Car(props){
    return <h2>Yep, another fucking car... but this time is a {props.brand}! </h2>;
}


/*

Props are also to pass data from one component to another, as parameters

*/
function Car4(props){
    return <h2>Car 4 is a {props.brand}</h2>
}

function Garage(){
    return(
        <>
            <h1>Who lives in my Garage?</h1>
            <Car4 brand = "Ford"/>
        </>
    );
}

// Another example, sending something different than a String
function Car5(props){
    return <h2>The same fucking car with brand {props.brand}</h2>
} 

function Garage(){
    const carName = "Ford";
    return (   
            <>
                <h1>Who lives in my Garage?</h1>
                <Car5 brand={carName}/>
            </>    
        );
}

// An Example sending an Object
function Car6(props) {
    return <h2>I am a { props.brand.model }!</h2>;
}

function Garage() {
    const carInfo = { name: "Ford", model: "Mustang" };
        return (
            <>
                <h1>Who lives in my garage?</h1>
                <Car brand={ carInfo } />
            </>
        );
}
