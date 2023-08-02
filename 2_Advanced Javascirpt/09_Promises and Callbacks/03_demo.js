// closure
function a(name)
{
          return function b()
          {
                    console.log(name);
          }
}
 let x=a("Sanket");
 for(let i=0;i<100000;i++)
 {
          // doing some work
          // just to delay the execution to see even after this this much time function b remmembers the variable name
 }
 console.log(x);
 x(); 
