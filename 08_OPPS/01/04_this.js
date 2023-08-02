 function Product(n,p)
{
          this.name=n;
          this.price=p;
          // return this; // if we dont return this keyword it will autmatically assume the you want to return 
}
let p1=new Product("iphone",1000);
console.log(p1);

function Product1(n,p)
{
          this.name=n;
          this.price=p;
          return {name:"faraz"};//but if we manually return any other obj it will nat return this
}
let p2=new Product1("iphone",1000);
console.log(p2);
// And remmember what is this keyword pointing to
//  it is  poninting to the empty obj we created while calling funciton 
// ALL OF THESE THINGS HAPPENS EXACTLY SAME IN THE CLASS ALSO
// why js has class keyword
// to make it syntacally consistent with other