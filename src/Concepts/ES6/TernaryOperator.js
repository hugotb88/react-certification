/*
    Ternary Operator

The ternary operator is a simplified conditional operator like if/else
Sintax: <condition> ? <expression if TRUE> : <expression if FALSE>
*/

// Example using if / else
if(authenticated) {
    renderApp();
}else{
    renderLogin();
}

// Using ternary operator
let authenticated = true; 
authenticated ? renderApp() : rernderLoggin();