let  a="1"+1;// + => if any one is string make both of it string
let b ="1"-1;// - =>it will convert both in number does not matter even if both are string
let c ="5"-"3";
let d ="5"-undefined;


console.log(typeof a);
console.log(a);
console.log(typeof b);
console.log(b);
console.log(typeof c);
console.log(c);
console.log(typeof d);

console.log(d);

console.log("typeof ",typeof NaN );



console.log(typeof v);

console.log("10"+{"a":10,valueOf () {return 8;}});
let g=("10"+{"a":10,valueOf () {return 8;}});
console.log(typeof g);


console.log(10-{"a":10,valueOf () {return {};},toString(){return "3"}});

console.log(10-{"a":1});
console.log(10-{valueOf () {return 8;}});