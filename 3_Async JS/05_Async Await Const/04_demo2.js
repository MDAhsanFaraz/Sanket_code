async function fun()
{
          console.log("entered");
          let x=await Promise.resolve(20);
          console.log("existing");
          return x;
}
console.log("Start");
let val=fun();
val.then(function f(value){
          console.log("value is ",value);
})
console.log("end");
// here end is  printed first even though the at line 4 promise already resolved
// this happens as when we see await control is throwm out of te function to the global code and returns when global code is executed  