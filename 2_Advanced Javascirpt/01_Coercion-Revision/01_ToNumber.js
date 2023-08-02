
// READ this:https://262.ecma-international.org/10.0/#sec-addition-operator-plus

console.log(12 - 4);
//both of them just a number so we just substract
console.log(undefined - 3);
/*
 *undfined is not a valid number, So we make it undergo ToNumber abstract operation
 *ToNumber(undefined)-->NaN
 *NanN - 3 -->and  for any operation with NaN it results in NaN
 *NanN - 3 --> NaN
*/
console.log(null-5);
/*
* null is not a valid  number , so we make it undergo  ToNumber abstract operation
* ToNumber(null) --> +0
* 0 - 5 -->-5
*/

console.log("132"- 10);
/*
 * "132" is a string so we make it undergo  ToNumber abstract operation
* ToNumber("132") --> 132
*132-10 -->122
*/

console.log("12fd"-20);
/*
* "12fd" is a string so we make it undergo  ToNumber abstract operation
*ToNumber("12fd")-> NaN because this string cannot be passed a number
*NaN- 20--> NaN
*/


// console.log(Symbol("123")-30);
//gives typeerror



console.log(4-true);
/*
*true is boolean , so we make it unndergo toNumber abstract operation
ToNumber(true)-->1
ToNumber(false)-->+0
*4-1=3
*/
console.log("0xf"-3);
/*"0xf "is  a string , but start with 0x which denotes start of hexadecimal
* so if we convert this string to a valid hexadecimal , we  will do  it
* ToNumber("0xf")->15
*15-3
*/ 
