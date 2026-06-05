// Import all named exports

/*import {
  add,
  subtract,
  multiply,
  divide
} from "./calculator.js";

import {
  add,
  subtract,
  multiply,
  divide
} from "./calculator.js";

// Call add function
console.log(add(10, 5));

// Call subtract function
console.log(subtract(10, 5));

// Call multiply function
console.log(multiply(10, 5));

// Call divide function
console.log(divide(10, 5));*/


// Import default export
import Calculator from "./calculator.js";

// Import named exports
import {
  add,
  subtract,
  multiply,
  divide
} from "./calculator.js";

console.log("Named Exports");

// Using named exports
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

console.log("Default Export");

// Using default export object
console.log(Calculator.add(20, 10));
console.log(Calculator.subtract(20, 10));
console.log(Calculator.multiply(20, 10));
console.log(Calculator.divide(20, 10));


