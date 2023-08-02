// disadvantages of callback function:-
// 1)call back hell 
// 2)inversion of control
// ex of -inversion of control
function fun(inputString,fn)// fn is a callback function 
{
          let output=inputString.split(',');// this splits everything by comma and converts "name:sanket,subject:cse" into array of strings
                                                                                                              // output[0]=>name:sanket
                                                                                                              // output[1]=>subject:cse
          for(let i=0;i<output.length;i++)// this loop calls fn() 
          {
                    fn(output[i]);// calling callback function
          }
}

fun("name:sanket,subject:cse",function process(ip){
          let arr =ip.split(":");// splits "name:sanket" by colon into arr[0]=name arr[1]=>sanket
          console.log("{" , arr[0] , "==>" , arr[1] , "}" );
});
// Inversion of control 
// if there is some part of code whose control we are passing to someone else and we dont know how that part will be executed 

// like here we are giving the control of callback function process() to the fun() function 
// how to call how many times to call all are in the control of fun() . So we dont know will they call the callback fucntion  according to our need
//  we can only define the callback function.
// but lost the control of your own buisness logic  