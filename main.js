import { add, subtract, multiply, divide } from './math.js';

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

const button = document.querySelector('button');
if (button) {
  button.type = 'button';
  button.addEventListener('click', () => {
    try {
      const num1 = parseFloat(window.prompt('Enter the first number:'));
      const num2 = parseFloat(window.prompt('Enter the second number:'));

      if (Number.isNaN(num1) || Number.isNaN(num2)) {
        console.warn('Please enter valid numbers.');
        return;
      }

      console.log(add(num1, num2));
      console.log(subtract(num1, num2));
      console.log(multiply(num1, num2));
      console.log(divide(num1, num2));
    } catch (error) {
      console.error('Calculation failed:', error);
    }
  });
} else {
  console.warn('No button element found in the document.');
}

