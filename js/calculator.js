// calculator.js

// Named Export: Add two numbers
export function add(a, b) {
  return a + b;
}

// Named Export: Subtract second number from first
export function subtract(a, b) {
  return a - b;
}

// Named Export: Multiply two numbers
export function multiply(a, b) {
  return a * b;
}

// Named Export: Divide first number by second
export function divide(a, b) {

  // Check division by zero
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}