function Product(n,p,c)
{
          this.name=n;
          this.price=p;
          console.log(this);// we can see this is pointing to the obj which has all the data members of Product
          category.call(this,c);//and passing it as a object in call() so category function this is also binded with same this of Product 
          // if we add anything in category using this it be added in the same object of Product  
          console.log(this);//after adding datamember categoryName and member fucniton getcategoryName
}
function category(c)
{
          this.categoryName=c;
          this.getcategoryName=function (){
                    console.log(this.categoryName);
          }
}
let p=new Product("Iphone",10000,"Electronics");// the above object where this is pointing is the empty obj {} which new creates for every new obj  
// and let p stores the return value whcih is this keyword as it automaticlly returns it
console.log(p);
p.getcategoryName();