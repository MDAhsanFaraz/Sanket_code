// x();//gives error as hoisting does not happen here as it is a variable 
var x=function gun()
{
          console.log("gun");
}
x();// globally scoped
gun();// gun is scoped inside x //Error

