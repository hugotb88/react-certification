/*
Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.
Destructuring makes it easy to extract only what is needed.



*/


// Destructuring Arrays

// Old way
const vehicles = ['mustang', 'f-150', 'expedition'];

const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// New way
const vehicles2 = ['mustang', 'f-150', 'expedition'];
const[car2, truck2, suv2] = vehicles2;

// If we only want the car and the suv
const [car3,, suv3] = vehicles;

// Example
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);


// ---------------------------- Destructuring Objects ---------------------------------- //
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}

myVehicle(vehicleOne);

// Old way
function myVehicle(vehicle){
    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.'; 
}

// Example of using destructuriing insde of a function
const vehicleTwo = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
}

anotherVehicle(vehicleTwo);

function anotherVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}



// ---------------------------- Destructuring NESTED Objects ---------------------------------- //
const vehicleThree = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
    }
}
  
nestedVehicle(vehicleThree)

function nestedVehicle({model, registration: { state } }){
    const message = 'My' + model + ' is registered in ' + state + '.';
}