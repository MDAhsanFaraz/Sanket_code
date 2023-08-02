function fun(x,fn)
{

         for(let i=0;i<x;i++)
         {
          console.log(i);
         }
         fn();
}
//1// callbaack funciton inside the fun fucntion call is ->function expression
fun(10,function log(){console.log(("Custom logger"));})

//2// callbaack funciton inside the fun fucntion call is -> anonymous fucntion
fun(10,function (){          

          console.log(("anonymous logger"));
})
//3// callbaack funciton inside the fun fucntion call is-> seperate function
function gun ()
{
          console.log("inside gun");
}
fun(9,gun);// do not do fun(9,gun())// becasue you will not be passing the function insted result of the function

//4// callbaack funciton inside the fun fucntion call is-> variable
let g=function  ()
{
          console.log("inside g");
}
fun(9,g);// do not do fun(9,g())->fun(9,undefined)

//5
let c=function  ()
{
          console.log("inside c");
          return  function() {console.log('retuned function');}
}
fun(9,c());//as now ffunction is returning it will pass the relust of the function g()