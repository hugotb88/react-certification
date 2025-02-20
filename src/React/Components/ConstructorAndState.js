/*
        Constructor of components
        State
        Lifecycle of Components
*/

/* 
    Component Constructor 

    - If there is a constructor() function in your component, this function will be called when the component gets initiated.
    - The constructor function is where you initiate the component's properties.
    - The constructor function is also where you honor the inheritance of the parent component by including the super() statement, 
      which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).
*/

// Example
class Car extends React.Component {
    constructor() {
        super();
        this.state = { color: "red" };
    }
    render() {
        return <h2>I am a Car!</h2>;
    }
}


// Another example 
class Car extends React.Component {
    constructor() {
        super();
        this.state = { color: "red" };
    }
    render() {
        return <h2>I am a {this.state.color} Car!</h2>;
    }
}


// ------------------------------------------------------- //

/* 
        State Object
    
    - React Class components have a built-in state object.
    - You might have noticed that we used state earlier in the component constructor section.
    - The state object is where you store property values that belongs to the component.
    - WHEN THE STATE OBJECT CHANGES, THE COMPONENT RE-RENDERS.
    - Refer to the 'state' object anywhere in the component by using the 'this.state.ppropertyname' sintax
*/

// Creating the state Object
// - The state is initialized in the Constructor
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = { brand: "Ford" }; // Here
    }
    render() {
        return (
            <div>
                <h1>My Car</h1>
            </div>
        );
    }
}


// Constructor with more properties 
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    render() {
        return (
            <div>
                <h1>My Car</h1>
            </div>
        );
    }
}


// ----------- Using the State Object ------------- //
/*

    - Refer to the 'state' object anywhere in the component by using the 'this.state.ppropertyname' sintax

*/
class Car extens React.Component {
    constructor(props){
        super(props);
        this.state = {
            brand = "Ford",
            model = "Mustang",
            color = "red",
            year = 1964
        };
    }

    render(){
        return (
            <div>
                <h1> My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}
                </p>
            </div>
        );
    }
}


// ----------- changing the State Object ------------- //
/*

    - To change a value in the state object, use the this.setState() method.
    - When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).

*/
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    changeColor = () => {
        this.setState({ color: "blue" }); // Here
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}.
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}
                >Change color</button>
            </div>
        );
    }
}