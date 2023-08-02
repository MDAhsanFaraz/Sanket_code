function demo()
{
          return new Promise(function (resolve,reject){
                  console.log("hi");
                  setTimeout(function process(){
                    console.log("Whoo,task done");
                    resolve("Students are the best");
                  },5000);
                  console.log("by");

          });
          
}
let y=demo();
console.log(y);// pending as the whole Promise is not completed its execution
// use mdn documnetation to read about promises


