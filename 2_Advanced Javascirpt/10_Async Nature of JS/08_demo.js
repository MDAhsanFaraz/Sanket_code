function f()
{
          console.log("hii");
          setTimeout(function g(){
                    hasdfa;// error comes after hi and bye 
          },2000)
          console.log("bye");


}
f();