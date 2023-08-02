function Product(n,p)
{
          console.log(this);// here this is empty as not put anything inside it 

          this.name=n;
          this.price=p;
          this.display=function(){
                    console.log(this.name,this.price);
          }
          console.log(this);// here name ans price and display all were put 
          // inside the empty obj this is ponting to  
          return 10;
}
const p2=new Product("Macbook",223000);