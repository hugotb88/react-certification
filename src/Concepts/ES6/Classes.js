/*
Classes
- Is a type of function.
- Instead to use the word 'function' to initate it, we use 'class'.
- Properties assigned inside a costructor.
*/ 
class Car{
    constructor(name){
        this.brand = name;
    }
}

/*
Method 
- Can be added custom methods in a class.
*/

class Car {
  constructor(name) {
    this.brand = name;
  }
  
  present() {
    return 'I have a ' + this.brand;
  }
}

const mycar = new Car("Ford");
mycar.present();


/*
Inheritance
- Use 'extends' 
*/
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}
const anotherCar = new Model("Ford", "Mustang");
mycar.show();