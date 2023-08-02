// {//if var is inside block it is  still global scoped
//           var x=12;
//           console.log(x);
// }
// console.log(x); 

// function fun (){//but if inside a function it scope is only function
//           var y=82;
//           console.log(y);
// }
// console.log(y); 

function fun()
{
          console.log(x);// why we get undefined ? ->lexical scoping
          var x=10;
          console.log(x);
}
{

          var y=10;//inside block still no error//beacuse it becames global due to var
}
fun(); 
console.log(y);