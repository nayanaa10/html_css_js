// math.js — this file contains math utilities
 
// 'export' keyword in front of 'const' means this variable
// can be imported by other files
 
// This function is also exported — other files can call add()
export function add(a, b) {
  return a + b;    // simply adds two numbers and returns the result
}
 
export function subtract(a, b) {
  return a - b;    // subtracts the second number from the first and returns the result
}
  
  export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!"); }
    return a/b; // handle division by zero case
  }
// Another exported function
export function multiply(a, b) {
  return a * b;    // multiplies two numbers and returns the result
}
export default { add, subtract, multiply, divide }; // default export of an object containing all functions
