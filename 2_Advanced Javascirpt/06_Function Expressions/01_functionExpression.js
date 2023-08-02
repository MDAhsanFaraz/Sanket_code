function fun()//funciton definition
{
          console.log(a);
}
// two types of function expression
// 1.Anonymous ->anonymous functions are hard to debug 
// 2.Named

// 1.Anonymous function expression
// i
var a=function gun (){   
          console.log(a);
}
var a=function (){   
          console.log(a);
}
// ii
gun(function(){
          console.log("hii");
})
// In js
// we can pass functions as an argument
// to another funcitons
//recursion is tricky to be done in function expression