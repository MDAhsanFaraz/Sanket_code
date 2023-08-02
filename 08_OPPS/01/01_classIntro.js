// class keyword was not there in js 
// it was recently introduced 
class Product
{
          // to define data members= variable etc.
          // we need to initalize inside the constructor funciton 
          // we use this keyword to do it

          constructor(n,p)
          {
                    console.log("constructor called for ",n);
                    // construvtor function to create new real life instances as object
                    // When we create an object it is the first funciton that gets called
                    // this of js is different from java 
                    this.name=n;//In JS we can directly define data member inside without  declaring it outside
                    this.price=p;
                    // console.log(this);
          }
                    // this.asfd="asdfa";//cannot use this out side this
          // member function
          displayProduct()//fucntion keyword is not required 
          {
                    console.log(this.name,this.price);// whenever we have to access a data member inside a data funciton 
                    // we have to use this keyword
          }
          buyProduct()
          {

          } 
}
// creating  a new  object iphone of type Product
let iphone=new Product("iphone",1000);//and passing parameter to the constructor  
let MacBook=new Product("MacBook",12000);
console.log(iphone,"\n",MacBook);
console.log(typeof MacBook);

// we can also create a new obj like this
let obj={
          name: "Faraz",
          age: 22
}
console.log(obj);
// calling data function using object
iphone.displayProduct();