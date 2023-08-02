let x;
x = document.getElementById('text');
let g = document.getElementsByClassName('items');
let c = document.getElementsByTagName('h1');
console.log("getElementById('text') ->",x);
console.log("getElementsByClassName('items')->",g[0],g[3]);
console.log("getElementsByTagName('h1')-> this gives node list:",c);
console.log("getElementsByTagName('h1')-> this gives single node:",c[0]);
console.log("--------------------------------------------------");

let x1;
x1=document.querySelectorAll('.items')
console.log(x1);
console.log("--------------------------------------------------");


let x2;
x2=document.createElement('li');
x2.className='items';
x2.innerText='Item5';
x2.style.color='green';
console.log(x2);

let ul=document.getElementById('list');
ul.append(x2);//adding item5 in list 
console.log(ul);
console.log("--------------------------------------------------");
