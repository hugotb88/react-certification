/*
 React goal is basically to render HTML in a web page.
 The way that is done is using a function called 'createRoot()' and its method 'render'

 createRoot() -> Takes an argument, an HTML element where the React element will be displayed.
 render() -> The render() method is then called to define the React component that should be rendered.
             But render where?
             There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.
             You'll notice a single <div> in the body of this file. This is where our React application will be rendered.
*/

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>)

//The above is to render Hello in the following HTML element
<body>
    <div id="root"></div>
</body>

// ---------------------------- JSX ------------------------------- //
/* 
    JSX is just to write HTML code in Javascript, like the following example. 
    Stands for JavaScript XML.
    JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
    JSX converts HTML tags into react elements.
    Expressions in JSX are written in curly braces -> {}
    For multiple lines we use curve braces or parenthesis -> ()

    Everything sohuld be wrapped in ONE top level element like a <div>

    The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.
    We use 'className' instead of 'class'

    React supports if/else, but not inside of JSX
*/
const myelement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );
  
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(myelement);

// Expression example, using curly {}
const myElement = <h1>This is an example of addition, the result is {5 + 5}</h1>;

// If we want multiple lines, we can use curve braces
const myElement = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );

// Example of ONE top element, we can use a fragment also <></>
const element = (
    <div>
        <p>Paragraph 1</p>
        <p>Multiple elements inside of a top element like div</p>
    </div>
)

// Using a fragment instead of a <div>
const myElement = (
    <>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </>
  );

// Use of IF statement and Ternary
const x = 5; 
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = <h1>{text}</h1>;


// Ternary 
const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;