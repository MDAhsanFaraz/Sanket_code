{
          let x=10;// it is block scoped 
}
// console.log(x);// gives error let cannot be accessed outside  block 

function fun()
{
          console.log(y);// throws error but in var it was undefiend because in var we can access it any wehere in function even before decalration not in let it will only be acessiby after declaration 
          let y=8;
          console.log(y);
}
fun();
// console.log(x);






