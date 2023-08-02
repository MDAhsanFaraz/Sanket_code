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
x.then(function exec(value){//.then registers the fucniton exec in onfullfillment array
          console.log("Value is ",value);
          return 100;// returning promise
})
.then(function exec1(value){// here this ecex is not chained to the same  onfulfillment arary 
          console.log("value here",value);// by this we can say that this (.then) is chained to above  .then's  promise that is going to be returned by the above .then not to the x
})