let arr=[1,2,3,4,5];
// this arr.map() funtion one by one  passes value and insdex of that value as parameter in the callback funcion  
arr.map(function process(v,i)//this funciton arr.map() expects a call back function
{
          /*
          *v->value
          *i->index
          */
          console.log("valueee",v,'index',i);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////

let x=arr.map(function process(v,i)
{
          console.log("value",v,'index',i);
});
console.log(x);//undefined because we are not returning anything

 
///////////////////////////////////////////////////////////////////////////////////////////////
let y=arr.map(function process(v,i)//y becames a array
{
          console.log("value",v,'index',i);
          return v*v;//returning v*v 
});
console.log(y);
console.log(arr);//old array remains the same