const add=(function exec()
          {
                    return "returned value";
          })();//function expression


// console.log(add());// this will give error 
console.log(add);// but this will give not give error it will print the value which is retruned 

// by this we understand the add varible stores what the fucntion exec is returning 
// if it is fucniton it will store that and can we can call that ficnitonn directly thorugh add()
