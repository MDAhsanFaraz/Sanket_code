// setTimeout will return some id
let id=setTimeout(function execute(){
          console.log("task completed2");

},3000); 
console.log(id);// through this id we can acess timeout function
clearTimeout(id);// setTimeout function will stop without executing 
