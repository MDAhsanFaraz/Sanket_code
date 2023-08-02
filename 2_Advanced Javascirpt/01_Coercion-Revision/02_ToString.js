// The addition operator either performs string concatenation or numeric addition. it tries if any one arg is string convert 
// other also to string using abstract function ToString()
console.log("faraz"+"Khan");


console.log(undefined+"node");
/*
undefined-->"undefined"
"undefined" +"node"-->"undefinednode"
*/
console.log("5"+null);

console.log("faraz"+true);
console.log("sdf"+[1,34,5]);//if object it goes to ToPrimitive() 
console.log("fafa"+[null]);
console.log("fafa"+[ undefined]);   
console.log("fafa"+[ null,undefined]);
//[undefined,null]->becames->  comma(,) after going inside ToString([undefined,null])
