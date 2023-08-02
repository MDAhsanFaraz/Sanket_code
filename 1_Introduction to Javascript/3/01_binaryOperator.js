// bitwise operator
console.log(5 & 3);
console.log(8 | 1);
console.log(3 ^ 3);
console.log(5 << 2);
console.log(5 >> 1);
console.log(0 - 0);
console.log("Faraz" + "Khan");
console.log("Faraz", "Khan");

// ternary operator
console.log((2 > 1) ? "Correct" : "Wrong");
// if else
if (101 % 2 == 0) {
          console.log("Even odd")
}
else {
          console.log("odd Number");
}
console.log(2 == "2");
console.log(2 === "2");
console.log(2 ** 3);//expotential

// loops
let i = 0;
while (i < 10) {
          console.log(i += 1);
}

//break continue
// nested loop

for (let i = 0; i < 5; i++) {
          let str = "";
          for (let j = 0; true; j++) {
                    str += "*";
                    if (j === i) {
                              break;
                    }

          }
          console.log(str);
}

for(let i=0;i<=10;i++)
{
          if(i%3===0)
          {
                    continue;
          }
          console.log(i);
}

// switch case
let exp="+";
let a=10;
let b=3;
switch(exp)
{
          case"+":
          console.log(a+b);
          break;
          case"-":
          console.log(a-b);
          break;
          default:
                    console.log("invalid");
                    break; 
}

// function
function name(x )
{
          console.log(x*5);
}
name(3);// calling function

// storing console.log in let  as it is a function

let c=console.log;
c("yoo")
