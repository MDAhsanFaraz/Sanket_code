let obj = {
          x: 1, y: 2
}
let another = obj;//here another and obj will point to same object in heap memory
const newobj = Object.create(obj);//creating new obj using obj

another.x = 23;// it will update both obj and another
console.log(obj, another);//both have same updated value

console.log(newobj);//gives empty
console.log(newobj.x, newobj.y);//but has the values of obj
newobj.x = 534;//updating newpbj x value
console.log(newobj, obj);///does not change the value of obj

newobj.z = 12;// z is property set on newobj not on obj
console.log(obj.z);//undeifined

// EX-2
const person = {
          isHuman: false,
          printIntroduction: function () {
                    console.log("My name is" ,this.name, "Am I human?" ,this.isHuman);
          }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
                  // Expected output: "My name is Matthew. Am I human? true"
person.printIntroduction();//GIVES UNdefined at this.name  
