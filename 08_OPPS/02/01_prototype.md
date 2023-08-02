>## Prototype

>objects are created by constructor calls using a new keyword.<br>
classes->Blueprints. Objects-> real instances<br>
class based coding in languages like c++,java is copy paste<br>
EX-class Product<br>
{
          //some daata member
          //some member function
}<br>
>### create obj=> new Product()<br>
>After creating obj if we make changes in the properties the class-> blue print
<br>it will have no effect on the already created obj.<br>
So obj are copies of classes <br>
There is no linking . after creation both are seperate from each other.

>### What is different in Javascript?
>- In js we dont have any mental model of copy.<br>
>- In js Objects are going to be linked to their classes or we can say prototypes<br>

>### what is Prototypes?
>- It is a mechanism using which JS objects inherit features from one another.<br>
>- By default Every obj will have  property name as  Prototype<br>

IF you want to access prototype chain using obj we use<br>
x.__ proto__<br>
For class we do<br>
class_name.prototype<br>
IF you want to read
https://www.freecodecamp.org/news/prototype-in-js-busted-5547ec68872/