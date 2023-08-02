function dummyPromise()
{
          return new Promise(function f(resolve,reject){
                    setTimeout(function(){
                              resolve("Timer' s promise")
                    },0);
          });
}
console.log("Start of the file"); 
setTimeout(function Timer1(){
          console.log("Timer 1 done");
          let y=dummyPromise();
          y.then(function promise(value)
          {
                    console.log("whose promise?",value);
          });
},0);
let x=Promise.resolve("Sanket's promise")
x.then(function processPromise(value)
{  
          console.log("Whose pomise?",value);
});
setTimeout(function timer2(){
          console.log("Timer 2 is done");
},0);
console.log("End of the file");
// here (whose promise? Timer' s promise) will print at end due to callback fucntion f is in the 3 rd place in the event queue
//  due to which promise  will only resolved after and it goes to the call stack which is after timer1 and timer2 