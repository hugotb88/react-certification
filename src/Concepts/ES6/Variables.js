/*
    Variables

With ES6 we can define variables in three ways:
- var
- let
- const

*/


/* 
    var  (has a function scope)

Rules:
- outside of a function, its scope is GLOBAL.
- inside of a function, its scope is within the function.
- inside of a block, like a loop, variable is still available outside of the block.

*/

var x = 33;


/* 
    let (has a block scope)

Rules:
- let is the block scoped version of var, and is limited to the block (or expression) where it is defined.
If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.

*/

let x = 34;

/* 
    const (has a block scope)

Rules:
- Once is created, its value cant be modified.
- NOT defines a CONSTANT value, defines a constant reference to a value, you can:
    - Change the elements of constant array
    - Change the properties of constant object

*/

const x = 33;

