function todo(task)// function inside which a setTimeout is used
{
          console.log("start of todo");
         setTimeout(function fun(){
          console.log("Completed",task);
         },5000);
         console.log("end of todo");
         
}
console.log("Starting");
todo("assingment");
console.log("Ending");
//  here callback funciton fun is  called after todo is over// Async nature of java script 

// problem ->
// if fun function is called after the completion todo.So todo has ended then how fun is able to access (task) valrible
// ans-> happens due to "closures"
// Closures is when a function "remmebers its lexical scoping even when the functionn is executed outside that lexical scope"
// if todo is completed it will be removed from the call stack how actually the variables still presists in the memory? where are they??