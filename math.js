// math.js — this file contains math utilities
 
// 'export' keyword in front of 'const' means this variable
// can be imported by other files
export const PI = 3.14159;
 
// This function is also exported — other files can call add()
export function add(a, b) {
  return a + b;    // simply adds two numbers and returns the result
}
 
// Another exported function
export function multiply(a, b) {
  return a * b;    // multiplies two numbers and returns the result
}
