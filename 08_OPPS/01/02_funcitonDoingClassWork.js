// In js there was no need of class they just created it just for the sake of it 
function Product(n,p)//doing the same work of the class
{
          this.name=n;
          this.price=p;
          return this;//  this is doing every thing here
}
let p1=new Product("iphone",1000);
console.log(typeof p1, p1);
// class keyword is just a wrapper over a funciton