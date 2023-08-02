//JS does two  reads of code
//  1)parsing
          // -scoping
//  2)declaration
let name="faraz";
function greet()
{
          var x=10;
          console.log("greetings",name);
          function test()
          {
                    console.log("test",x);
          }
          test();
          console.log(x);
}
function fun()
{
          console.log("have fun ",name);
}
greet();
fun();
// console.log(x);