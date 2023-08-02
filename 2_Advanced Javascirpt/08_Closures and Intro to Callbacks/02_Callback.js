
// CALLBACKS
// callback function=> A CALL back fntion is a function passed into another function as an argument
// the passed fucntion can be -> function expression ,anonymous function(function expression with no name),arrow function

function fun(x,fn)//consuming callback
{
          /*
          *x->number
          *fn->callback function

          */
//          some logic
         for(let i=0;i<x;i++)
         {
          console.log(i);
         }
         fn();//calling callback function passed 
//          
}
fun(10,function log(){          //this log  is the call back funtion

          console.log(("Custom logger"));
})