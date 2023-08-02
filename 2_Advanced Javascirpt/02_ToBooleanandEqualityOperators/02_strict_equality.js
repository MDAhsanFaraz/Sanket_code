// === works when types are same 
console.log(NaN===NaN);
console.log(NaN===29);
console.log(222===222);
console.log(+0===-0);
console.log(-0===+0);
console.log(undefined=== undefined);
console.log(null===null);
console.log(undefined===null);
console.log("faraz"==="faraz");
console.log({a:2}==={a:2});//not same memory location
let x={s:2};
console.log(x===x);//same memeory location
console.log(Symbol('sd')===Symbol('sd'));//not same memory location
let y= Symbol('we');
console.log(y===y);