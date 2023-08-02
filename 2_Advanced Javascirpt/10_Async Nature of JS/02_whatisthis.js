// Async code not exectue line by line 
// setTimeout is not known to js in documentation (so does not follow syncronous nature)
// these feautres are found in runtime enviroment of the javascript (functions like setTimeout , console.log cannot found in documentation of js )
// NODE is the runtime enviroment of javasccript 
console.log("start"); 

setTimeout(function exec()
{
          console.log("task done");
},5000);
console.log("end");
