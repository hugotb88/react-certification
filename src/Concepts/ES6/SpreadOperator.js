/*
The Spread Operator -> "..." allows us to copy all or part of existing array or object into another array or object.
*/

const numbersOne = [1,2,3];
const numbersTwo = [4,5,6];
const numbersCombined = [...numbersOne, ...numbersTwo];

// The Spread operator is often used iun combination with destructuring.
const numbers = [1,2,3,4,5,6];

// Assign the first and second items from numbers to variables and put the rest in an array.
const[one, two, ...rest] = numbers;

// Example
const myVehicle = {
    brand:'Ford',
    model:'Mustang',
    color:'Red'
}

const updateMyVehicle = {
    type:'car',
    year: 2021,
    color: 'yellow'
}

// Combinated.
const myUpdateVehicle = {...myVehicle, ...updateMyVehicle};

console.log(myUpdateVehicle);
