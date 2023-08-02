// js in single threaded
// js by default supports synchronous programming (executes code line by line)
// (above  property only works for operations natievly known to js e.g->for loop )

// ex of sync code
console.log("start");
for(let i=0;i<1000000000;i++)//takes time to execute so the code stop for thta amount of time 
// it wont skip for loop to print "end"
{


}

console.log("end");