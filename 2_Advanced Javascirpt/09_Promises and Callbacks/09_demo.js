const add=(function exec()
          {
                    let counter=0;
                    return function process()
                    {
                              counter+=1;
                              return counter;
                    }
          })();// () at end calls the fucniton main funciton expression which is exec)
console.log(add());//this add () => calls the funtion in the return statement (process)
console.log(add());
console.log(add());
// here due to closuer value of counter is remmembered and after evry call it gets incremented value
console.log(add);// give output ->[Function: process]  means when we do  add ()
// exec funciton is not called 
// but the process function which is returned by exec is called
// let counter=0 is only created 1 time as we dont go inside exec for execution 
//  we directly call process through add