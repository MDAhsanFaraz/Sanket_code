// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// read 
let x= Promise.resolve(123);// Promise.resolve immediatley gives resolved promise
x.then(function process(value){
          console.log('value is' ,value);
});
 
// let y=Promise.reject(123);// will give error immediately
