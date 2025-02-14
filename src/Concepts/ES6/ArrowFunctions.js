/*
Arrow functions allows us to write shorter functions with an specific sintax. 
*/

hello = function (){
    return "This is an Arrow Function";
}


// If it has only 1 statement and 
// statement returns a value, we can remove the brackets and the return keyword.
hello = () => "This is the most basic arrow function";

// With Parameters
hello = (parameter) => "Parameter value is: " + parameter;

// If you have only 1 parameter, you can skip the parentheses
hello = parameter => "Parameter value is: " + parameter;

/*
IMPORTANT NOTES
*/
// There is non binding of 'this', usually it refers to the object  that called the function.
// But iwth Arrow Functions, 'this' ALWAYS represents the object created by the arrow function.

// With Regular Functions
class Header {
    constructor() {
      this.color = "Red";
    }
  
  //Regular function:
    changeColor = function() {
      document.getElementById("demo").innerHTML += this;
    }
  }
  
  const myheader = new Header();
  
  //The window object calls the function:
  window.addEventListener("load", myheader.changeColor);
  
  //A button object calls the function:
  document.getElementById("btn").addEventListener("click", myheader.changeColor);

// ------------------------------------------------------------------------------------------------------------- //

  // With Arrow Functions
  class Header {
    constructor() {
      this.color = "Red";
    }
  
  //Arrow function:
    changeColor = () => {
      document.getElementById("demo").innerHTML += this;
    }
  }
  
  const anotherHeader = new Header();
  
  
  //The window object calls the function:
  window.addEventListener("load", myheader.changeColor);
  
  //A button object calls the function:
  document.getElementById("btn").addEventListener("click", myheader.changeColor);