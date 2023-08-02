function fun()
{
          console.log("fun called");
}
function gun(fn)
{
          console.log("inside gun");
          fn();
          console.log("leaving gun");
}

gun (function (){console.log("new function passed");})// passing function as an argument in gun //function expression
console.log("\n");
gun(fun);