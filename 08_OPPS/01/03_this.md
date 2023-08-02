## this
>In Js behaviour of (this) keyword is different form C++ and Java  

> In js this keyword refrences to the calling site i.e from where the function  or class is  called

- In order to understand  this keyword. we first need to understand new keyword.

## new
> It looks like, new keyword only calls constructor, but it does a lot more than that.

>new keyword is not only associated with classes. it can be used with function also.

- when class were not introduced whatever fucnitonality we are getting from class we used to get it from function.

>With respect to function what new keyword do

><strong> function Product(n,p)<br>
{<br>
          this.name=n;<br>
          this.price=p;<br>
          return this;<br>
}<br>
let p1=new Product("iphone",1000);<br>
</strong>
- you will get absolutely same output in funciton   as if you used class.

>### what new keyword actually does?
>when you do -><strong> let p1=new Product("iphone",1000);</strong>

> new keyword actually executes a 4 step proces.
>1) The new keyword creates a brand new empty js object ->{}
> 2) It a Does process of linking-> learn later
>3) It  assingns the  this keyword to the empty obj{} the new keyword created.
>
>      -  <strong>this->{}</strong>
>
>     -  NOW  It calls the function in which   -> we assinged this property  to a empty oject {}.
>
>4) the function starts.(And we know that this keyword belongs to calling site)
> - what we mean by calling site is That. this keyword is pointing to the same empty obj {}.<br> which new keyword created during calling of the function<br>
 <strong> let p1= [new Product("iphone",1000)]-> this is the call site where after new keyword we are calling the constructor funciton </strong><br>
so the moment you call the funciton.<br>
any where in the function where  this keyword is used with a data_member(variable) it is refering to the same empty obj{} which you created while calling the function using new keyword  <br>
<strong> function Product(n,p)<br>
{<br>
          this.name=n;<br>
          this.price=p;<br>
          return this;<br>
}<br></strong>
<strong> THATs why we say this refers to the calling site of the 
funciton.</strong><br>
>- means this refers to obj that you actually prepared while calling the new keyword then the function<br>
> so when you do this.name="faraz"; <br> 
o/p=>{name:faraz}<br>
it assings key name with a value faraz <br>
where it does this it does this inside the empty object where this was refering to <br>
>- At last if the funciton doesn't return any specific object,then it automatically returns this.<br>
Otherwise it returns the object returned by you<br>
>what it measn is if here<br> 
<strong> function Product(n,p)<br>
{<br>
          this.name=n;<br>
          this.price=p;<br>
          return this;// here we if don't return this  keyword then also output will be the same(see the next [04_this.js] file) <br>
          // as it will autmatically assume the you want to return the this keyword <br>
}<br>
let p1=new Product("iphone",1000);<br>
</strong>
