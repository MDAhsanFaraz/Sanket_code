function Product(n,p,c)
{
          this.name=n;
          this.price=p;
          category.call(this,c);   
}

function category(c)
{
          this.categoryName=c;
      
          
}

category.prototype.getcategoryName=function(){

          console.log(this.categoryName);
}

Product.prototype=Object.create(category.prototype);//connecting prototype of Product with category prototype 
// all the fucntions of category.prototype can be accessed and modified by Product
// if we dont do this we will not be able to find getcategoryName function
// will show this error:TypeError: p.getcategoryName is not a function
let p=new Product("Iphone",10000,"Electronics");
console.log(p);
p.getcategoryName();// error TypeError: p.getcategoryName is not a function
console.log(p.__proto__);// p has the prototype of category
// here we are doing inheritacne using only funcitons 