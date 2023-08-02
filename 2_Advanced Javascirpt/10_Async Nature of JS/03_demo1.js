function process ()
{
      console.log("start");    
      setTimeout(function exec()
      {
          console.log("Executed some task");
      },5000);
      for(let i=1;i<1000000000;i++)// takes more than 1 sec
      {
          // some task
      }
      console.log("end");
}
process(); 
console.log("faraz");// this will print before setTimeout
//  here all the native code of js will complete its execution first then the runtime function will run 
// setTimeout will start its timer as soon it setTimeout function is found . js sends runtime functions to runtime and starts the timer immediately
// After the execution of  native code. after the callstack of the native JS code is empty runtime is excuted    
// Even after the completion of the timer in setTimeout fucntion will not execute the call back function inside it.
// rather when the timer is finished
//  runtime sends it to a event queue [] .which keeps all the runtime function waiting to be executed after the native code execution(Waits till native code call stack is empty)
// and after that  event loop keeps cehcking if callsatck is empty if empty it sends the function to the call stack to execute

// Event loop in JavaScript is a mechanism through which the ‘calls waiting for execution’ in the callback queue/job queue can be put on the call stack.
// go to this article explains event queue and event loop
// https://www.educative.io/answers/what-is-an-event-loop-in-javascript
  
// the condition to start executing tasks from eventqueue is that
// 1) the call stack should be empty i.e.
// no function in the call stack is left to be executed
// 2) the global code is also =done
