/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, n * 10000);
      });
    }
    
   sleep(5).then(() => console.log());

   console.log();
module.exports = sleep;