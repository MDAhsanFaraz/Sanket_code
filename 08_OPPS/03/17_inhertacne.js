// without doing that much we use extends to do inheritance 
class category{
          constructor(c)
          {
                    this.categoryname=c;
          }
          getcategoryname()
          {
                    console.log("category is",this.categoryname);
          }

}
class Product extends category{
          constructor(n,p,c)
          {
                    super(c);// callls the parent constructor puts vlaue of c in categoryname
                    this.name=n;
                    this.price=p;
          }
          display()
          {
                    console.log("Detaills of the prodduct are");
                    console.log("Name",this.name);
                    console.log("price",this.price);
                    this.getcategoryname();
          }
}
let p=new Product("iphone",1000,"Smart Phone");
p.display();
console.log(p.__proto__);//  prototype of p is category