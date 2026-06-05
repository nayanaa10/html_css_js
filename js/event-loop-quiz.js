console.log('1');
 
setTimeout(() => console.log('2'), 0);
 
Promise.resolve()
  .then(() => {
    console.log('3');
    // Returning a new Promise adds another microtask to the queue
    return Promise.resolve();
  })
  .then(() => console.log('4'));
 
Promise.resolve().then(() => console.log('5'));
 
console.log('6');
 
