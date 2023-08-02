// // why js has class keyword
// to make it syntacally consistent with other
// i can call fucniton without new keyword also
function Product(n,p)
{
          this.name=n;
          this.price=p;
}
let p1=new Product("iphone",1000);
console.log(p1);
const p2=Product("faraz",10000);// if we dont use new keyword it will not create a empty obj for this keyword 
//  and this p2 funciton call will act like normal fucntion and we get undefined if we dont return anything
console.log(p2);
// But class we cannot call fucniotn without new keyword 
// it so it actually forces js developers to use new keyword