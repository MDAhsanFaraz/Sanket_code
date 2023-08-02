let arr=[3,23,23,3];
console.log(typeof arr);
let obj={
          x:10,
          y:20
}
obj.x=20;
Object.freeze(obj)// stops the valus of array from getting updated and added
obj.y=13;
obj.a=23;
console.log(obj);