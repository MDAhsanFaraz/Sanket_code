// Closure
function todo(task)// function inside which a setTimeout is used
{
          console.log("start of todo");
         setTimeout(function fun(){
          console.log("Completed",task);
         },5000);
         task="task is changed" //  after task is changed it will give new task value
         console.log("end of todo");
         
}
console.log("Starting");
todo("assingment");
console.log("Ending");
//  here callback funciton fun is  called after todo() is over// Async nature of java script 

// problem ->
// if fun()  is called after the completion todo().That means todo has ended. then how fun() is able to access (task) valrible
// ans-> happens due to "closures"
// Closures is when a function "remmebers its lexical scoping even when the function is executed outside that lexical scope"
// if todo is completed it will be removed from the call stack how actually the variables still presists in the memory? where are they?

//  if there is a function inside a function. until all the internal function are not executed the variable used in the parent function's 
// will be remmembered by the internal function even if the parent's execution is finished
// even the changes done to the variable will be remmbered and the latest value of the variable will be printed