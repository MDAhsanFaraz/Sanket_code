 // always read ecmascript documentation
 let a="10";
 let b="abs";
 let c=undefined;
 let d=10-c;
 console.log(a,b,c,d);
 console.log(isNaN(a));
 console.log(isNaN(b));
 console.log(isNaN(c));
 console.log(isNaN(d));//isNaN first checks if NaN or not then tries to convert the given argument into number using ToNumber()
//  isNaN checks of given data is Nan or not
//  here isNaN function returns wrong output it gives true for a stirng value also
//  find solution to to this how to check if given data is NaN or not 
 
//  1solution
 let x="sdf";
console.log((typeof(c)=='number'&& isNaN(x))?"NaNvalue":"NOt NaN value");