// Read this code and predict the output before looking at the answer
 
console.log('A');
// Synchronous — goes straight onto the Call Stack → runs immediately
 
setTimeout(() => {
  console.log('B');
}, 0);
// Macrotask — even with 0ms delay, it goes to the Callback Queue
// It will only run AFTER the Call Stack and Microtask Queue are empty
 
Promise.resolve().then(() => {
  console.log('C');
});
// Microtask — goes to the Microtask Queue
// Runs before the setTimeout callback, even though setTimeout was first!
 
console.log('D');
// Synchronous — runs immediately like 'A'
 
