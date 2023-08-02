
// when there is objects  ToPrimitive is called internally to convert the given object into non Object type (primitive type)   
//  if it cant convert it throws error 

// then it calls OrdinaryTopromitive internally 
// we can pass a optional argument (prefered type) where we can give are prefered type if "string " or "number "
// if not given prefered type than it takes the object as default  convert it to "number"

// hint is the internal variable which has the value  "string " or "number "
// if hint->"string" it calls ->toString() first then
                    // calls ->valueOf() 

// if hint->"number" it calls ->valueOf() first then
                    // calls -> toString()         
                    
                    
// here if first function call return non object then 2nd finction will not be called [we are talking about these fucntion toString(),valueOf()]
// if both function is not able to return non object it returns error



// valueOf and tostring is not a abstract function 

 let a= {"english":90,"maths":23};
console.log(a.toString());//by default toString() returns [object Object]
console.log(a.valueOf());//by default valueOf() returns a objecct whichh is the same object 

let x=[1,2,4];// for array 
console.log(x.toString());//toString() returns prints array without bracket
console.log(x.valueOf());//valueOf() prints same array 