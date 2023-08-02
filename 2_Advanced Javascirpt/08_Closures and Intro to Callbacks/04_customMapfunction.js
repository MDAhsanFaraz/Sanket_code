// creating a custom map function to understand internal working of map function 
// we haave created a cunstom map function mapper which will interannl call the call back funciton (arr.length)times
//  and pass corespoding correct values is paramater of call back function 
//  and return a array which is filled with values filled with the values returned by the callback function



function mapper(arr,fn)// this os custom map function
{
          /*arr-> is to going to be array  of elements 
          *fn-> callback function expects two arguments value and index
          */
         let result=[];
         for(let i=0;i<arr.length;i++)
         {
          // i->index, arr[i]->value
          let res=fn(arr[i],i);//calling the call back function and passing value and index in parameter
          result.push(res);
         }
         return result;// returning result array filled with index and value of passed array
}


let arr=[1,2,3,4,5];// array to be passed in custom map function 
let x=mapper(arr,function cuber (v,i)// calling custom map function and passing cuber a callback function in the parameter 
                                        // the map function returned result array is  stored in the x  
{
          console.log("value",v,"cube:",v*v*v,"index:",i);
          return v*v*v;
});
console.log(x,arr);
// the control of the call back function is in hand of  the mapper fucniton