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
// Not
const Header = () => {
    return (
        <>
            <h1 style={{ color: "red" }}>Header with CSS Inline</h1>
            <p>Add a little style!</p>
        </>
    );
}