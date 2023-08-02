// Promises is a special object 
// how to create a promise 
// how to comsume
// the properties:- 
// (i)status/state (ii)values (iii)onfullfillmment (iv) onReject

// How can we write a function  to download some data from  a url and not use callbacks
// instead use promises?


// new Promise is Promise constructor
// to create a promise we have to call the promise constructor
// the promise constructor takes a callback as argument or we can say it expects a callback function
// the callback passed inside constructor expects 2 arguments (resolve ,reject)
// then inside callback write your logic 
// if you want to return something on success then call resolve function with whatever value you want to return 

function fetchData(url)
{
          return new Promise(function (resolve,reject){
                    console.log("Starting fetching from",url);
                    setTimeout(function process(){
                                        let data="Dummy data";
                                        console.log("Completed");
                              // some how return the data
                              resolve(data);//return somedata on sucess we use resolve funciton (it is predefined jS function)
                              //we can only resolve once 
                              },4000)
          });
}

function fetch1(url)
{
          return new Promise(function (resolve,reject){
                    for(let i =1;i<100000;i++)
                    {
                              // some logic
                    }
                    console.log("Completed");
                    resolve("sanket");

          });
          
}
let a=fetch1();
console.log(a);

let b=fetchData();
console.log(b);
b.then(function(va)
{
          console.log(va);
})