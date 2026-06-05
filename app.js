// Import named exports — you must use the EXACT same names
// and wrap them in curly braces { }
import { PI, add, multiply } from './math.js';
 
// Now we can use PI, add, and multiply freely

console.log(PI);
// → 3.14159
console.log(add(2, 3));
// → 5
console.log(multiply(4, 5));
// → 20
 
// Import a default export — no curly braces needed
// You can give it ANY name you like
import greet from './greet.js';
console.log(greet('Bob'));
// → Hello, Bob!
 
// Import EVERYTHING from a file under one namespace object
import * as MathUtils from './math.js';
console.log(MathUtils.PI);
// → 3.14159   (access via MathUtils dot notation)
 
// Rename something while importing to avoid name conflicts
import { add as sum } from './math.js';
console.log(sum(10, 5));
// → 15
