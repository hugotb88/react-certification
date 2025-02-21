/*
    There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:

    - Inline styling
    - CSS stylesheets
    - CSS Modules

    Note: In JSX, JavaScript expressions are written inside curly braces, 
    and since JavaScript objects also use curly braces, 
    the styling in the example above is written inside two sets of curly braces {{}}.

    - Property names are used in camelCase, like 'backgroundColor instead of 'barckgorund-color'

*/

// ================== Inline Styling ================ //
// To style an element with the inline style attribute, the value must be a JavaScript object
const Header = () => {
    return (
        <>
            <h1 style={{ color: "red" }}>Header with CSS Inline</h1>
            <p>Add a little style!</p>
        </>
    );
}

// ==================  JavaScript Object ================ //
// You can also create an object with styling information, and refer to it in the style attribute
const Header = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
    return (
        <>
            <h1 style={myStyle}>Hello Style!</h1>
            <p>Add a little style!</p>
        </>
    );
}

// ================== CSS Stylesheet ================ //
// You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.

// Create a file called 'exampleStylesheet.css;' and then import it in 'index.js'
// import './React/Styling/exampleStylesheet.css';
body {
    background - color: #282c34;
    color: white;
    padding: 40px;
    font - family: Sans - Serif;
    text - align: center;
}