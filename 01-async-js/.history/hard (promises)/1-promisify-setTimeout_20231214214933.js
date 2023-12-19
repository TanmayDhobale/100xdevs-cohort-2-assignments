/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


function wait(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, n * 10000);
    });
  }

  function wait(n) {
    return new Promise(resolve => {
      setTimeout(resolve,n);
    });
  }
  
  wait(5).then(() => console.log("Promise resolved after n seconds"));
  
  module.exports = wait;