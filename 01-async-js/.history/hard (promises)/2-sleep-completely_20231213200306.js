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
    
    wait(5).then(() => console.log("Promise resolved after n seconds"));

module.exports = sleep;
