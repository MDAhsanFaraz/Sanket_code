//+ ,- operantions on objects
console.log("Sanket"+{"a":10});
/*
"Sanket" --> is already a primtive
{"a":10} --> is not a primitive,so we call toPrimitive without a hint,
we first call valueOf on {"a":10} --> and it returns same obejct
we call toString --> toString will return '[object Object]' which is a string i.e primitive
"Sanket"+ "[object Object]"-->"Sanket[object Object]"
*/

console.log( 10-{"a":45});
/*
10is already a number
{"a":45} is going to get converted ToNumber, and this is an object
for object we call ToPrimitive with hint Number
first we call valuOf --> it returns the same object-->{"a":45}
then we call toString --> ut return '[object Object]' which is primitive
so call ToNumber on string  '[object Object]' again which gives NaN
10- NaN =NaN
*/


// Overriding internal explanantionn

let x={"b":90,valueOf(){return 2;},toString(){return "custom"}};
console.log(10-x);
/*
x is object we need to pass it ToPrimitive with hint Number
we call valueOf --> it return 2; which is primitive
x becomes 2, 10 is already a number
2-10=-8
*/

console.log("FAraz"+x);


console.log("faraz"+{"a":90,toString(){return "apple"}}); 
// valueOf returns object itself
// so internally toString is called and we have overriden he function toString

console.log("albert"+{"a":90,valueOf(){return {}},toString(){return "apple"}});
// here you can see valueOf was returning object so it goes to toString
// finction which we overden so it return" apple " which we set too return   