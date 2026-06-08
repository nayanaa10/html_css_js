// BUGGY CODE — fix it
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);

  }, i * 100);
}// Currently outputs: 5, 5, 5, 5, 5


/*for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 100);
}


/ 1. Create config object
const config = {
  env: 'dev',
  port: 3000,
  debug: true
};

console.log("Original Config:", config);

// 2. Change property (Works)
config.port = 8080;

console.log("After Port Change:", config);

// 3. Reassigning const variable (Throws Error)
try {
  config = {};
} catch (error) {
  console.log("Error:", error.message);
}

// 4. Create immutable object
const frozenConfig = Object.freeze({ ...config });

// 5. Try to modify frozen object
frozenConfig.port = 9999;

console.log("Frozen Config:", frozenConfig);

// 6. Compare both
console.log("Config:", config);
console.log("Frozen Config:", frozenConfig);


//Convert all the following regular functions into arrow functions. Keep the same behavior.
// Convert each of these to arrow functions:
//before
function square(n) {
  return n * n;
}
//after
const square = (n) => n * n;
//before
function greet(name) {
  return 'Hello, ' + name + '!';
}

//after
const greet = (name) => 'Hello, ' + name + '!';

//before
function isEven(n) {
  return n % 2 === 0;
}
//after
const isEven = (n) => n % 2 === 0;
//before
function getFullName(first, last) {
  return { fullName: first + ' ' + last };
}
//after
const getFullName = (first, last) => ({ fullName: first + ' ' + last });

//before

function noOp() {
  // does nothing
}
//after
const noOp = () => {
  // does nothing
};
//Expected Output: square(5) → 25 | greet('Ravi') → 'Hello, Ravi!' | isEven(4) → true
*/