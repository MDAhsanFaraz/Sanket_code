function Product(n,p)
{
          this.name=n;
          this.price=p;
          return 10;//if i return non obj it will not return non obj 
          // instead it will return this keyword  
}
let p1=new Product("iphone",1000);
console.log(p1);