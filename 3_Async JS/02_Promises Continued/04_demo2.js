function demo2 (x)
{
          return new Promise(function (resolve,reject){
                    console.log("Start");
                    setTimeout(function process(){
                              console.log("Completed timer");
                              if(x%2==0)
                              {
                                        resolve("EVEN");
                              }
                              else
                              {
                                        reject("ODD");
                              }
                    },5000);
                    console.log("somewhere");
          });
}
let a=demo2(2);
console.log(a);

let e=demo2(3);
console.log(e)//error will be thrown it gets in rejected funciton of Promise