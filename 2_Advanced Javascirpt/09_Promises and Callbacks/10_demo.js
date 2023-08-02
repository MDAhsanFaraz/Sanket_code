const add=(function exec()
          {
                    let counter=0;
                    return function process()
                    {
                              counter+=1;
                              return counter;
                    }
          });//not doing () at the end
console.log(add());
console.log(add());//fucniton:process
console.log(add());
console.log(add);//fucniton:exec

// now if () is added end
// so we did not go ecextute exec and we were not able to go inside exec 
//  when we do add() exec was exectued and we get return value   fucniton: process

console.log(add()());// if we do 2 () after add first exec was executed then process