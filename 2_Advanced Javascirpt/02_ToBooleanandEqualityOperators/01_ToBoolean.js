// https://262.ecma-international.org/10.0/#sec-toboolean
console.log(!0);
/*
0->false
ToBoolean(0)->false
!0->true
*/
console.log(!-4);
/*
-4->truethy 
ToBoolean (-4)->true
!(-4)->!true->false
*/
console.log(!{});
/*
object {} is tuthy
ToBoolean({})-> true;
!{}->flase
*/
console.log(!console.log(0));
// console.log()->return undefined and ToBoolean(undefined )->false 
