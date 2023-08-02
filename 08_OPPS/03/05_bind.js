// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
const modulee = 
{
          x: 42,
          getX:  () =>// we used arrow funciton as normal do not do lexiacl scoping they  serach for value
          // in their own this{obj}->which is the object they are called in
          {
                    return this.x;
          }
};
const unboundGetX = modulee.getX;
console.log(unboundGetX);//we store the getX fucniton of module in unbound
console.log(unboundGetX());//but when we try to execute it gives undefined

// Because // The function gets invoked at the global scope
// if we add values at global this keyword it will give us the value but not the value we are looking for which n madulee scope
this.x="new value added";
console.log(unboundGetX());