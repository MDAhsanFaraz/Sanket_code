function Product(n,p,c)
{
          this.name=n;
          this.price=p;
          // category.call(this,c); // if dont call datamebers of category fucniton will not be attached in it  
}
function category(c)
{
          this.categoryName=c;
          this.getcategoryName=function (){
                    console.log(this.categoryName);
          }
}
let p=new Product("Iphone",10000,"Electronics");
console.log(p);
p.getcategoryName();// error TypeError: p.getcategoryName is not a function
