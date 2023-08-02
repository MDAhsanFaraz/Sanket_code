function fun()
{
          return new Promise(function f(resolve,reject){
                    setTimeout(function process(){
                              console.log("resolved");
                              resolve(123);
                    },5000);
          });
}
let x=fun();
//chaining more functions inside onfullfullment array 
x.then(function exec(value){// //.then registers the fucniton exec in onfullfillment array
          console.log("Value is ",value);
          for(let i=0;i<10000000000;i++)//waits for this for loop
          {

          }
          return 100;
})
x.then(function exec1(value){//.then registers the fucniton exec1 in the same  onfullfillment array //onfullfillment[exec1,exec2]
          console.log("yo the value is",value);
          return 200;
})