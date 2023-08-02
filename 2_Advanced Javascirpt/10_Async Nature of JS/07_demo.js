function fun()
{
          console.log("fun called");
          setTimeout(function exec()
          {
                    console.log("Inside the 7s time out");

          },7000);
          setTimeout(function process()
          {
                    console.log("Inside the 3s time out");

          },3000);
          
          
}
fun();
for(let i=1;i<10000000000;i++)
{
    // some task
}
setTimeout(function last()
{
          console.log("last timeout");
} ,0);
// Inside the 3s time out
// Inside the 7s time out
// last timeout
// this is because timer of 3 and 7 started before last() callback function and for loop took lot of time in which 3 and 7  timer were finished