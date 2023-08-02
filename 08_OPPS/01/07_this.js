function Product(n,p)
{
          this.name=n;
          this.price=p;
          this.display=function(){
                    console.log(this.name,this.price);
          }
}
const p1=new Product("iphone",1000);
console.log(p1);
p1.display();
const p2=new Product("Macbook",223000);
p2.display();
