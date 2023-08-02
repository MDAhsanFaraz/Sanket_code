function fun ()
{
          ta="vibhav";         
          console.log(ta);
          
}
function gun()
{
          "use strict";
          teacher="sanket";
          console.log(teacher);
}
fun();//vibhav is printed not under strict mode autoglobal are not prohibited
console.log(ta);// becames autoglobal
gun(); // gives error auutoglobal are prohibiteds

// CAN read mdn documentation for strict mode