const add=(function exec()
          {
                    return "returned value";
          });// if we dont do () at the end it will the funciton :exec
          console.log(add);
          console.log(add());

// because the () at the end  calls the main fucntion expression  is which is execs
         
// if exec will return some function it will store that funciton inside add 
// if we do ( at () at end or add()=>both returns same value
//  because we are bth case we are calling exec 