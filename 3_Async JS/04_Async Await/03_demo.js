function dummyPromise()
{
          return new Promise(function f(resolve,reject){
                    setTimeout(function(){
                              resolve("Timer's promise")
                    },10000);
          });
}
console.log("Start of the file"); 
setTimeout(function Timer1(){
          console.log("Timer 1 done");
          let y=dummyPromise();
          console.log("j");
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
