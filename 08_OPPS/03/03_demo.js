var data={
          name:"faraz",
          company:"Google",
          display:function(){
                    console.log(this);
                    console.log(this.name,"works in",this.company,"salary ",this.salary);
          }
 }

 data.display();
// here we call display fucntion of data   
// In normal fucniton we have predefined this keyword which points to the object data it self
// means the predefined this of fucniton display points to the object inside which fucniiton is defined

// means  we know thatt this keyword points to an empty object
// so here that empty obj is  data where this keyword  is pointing 

// so even if we add anything outside 
// we can access it as this is pointig to it
data.salary="1233434";
data.display();

// remmember the this keyword inside the fucniton display and this keyword outside have different scoping
// indise this has scoping of object obj as it is pointing to it
// outside this has global scoping
// both the this are completely different
console.log(this); // as we can see this keyword which is in the global scope is empty  is a empty 
console.log(this.name);// undefined cannot access inside this datamember
// AS both the this completely pointing to 2 different objects in the memory