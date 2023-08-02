const modulee = {
          x: 42,
          getX: function() {
            return this.x;
          }
        };
        const unboundGetX = modulee.getX;
        console.log(unboundGetX()); 

//  To make the this.x of unboundedGetX point to object modulee we use bind fucntion  


// Bind
// bind() creates a new fucniotn that when called 
// makes the this keyword of that fucntion bind with the given object 
        const boundGetX = unboundGetX.bind(modulee);//binding this keyword of function unboundGetX with object modulee
        // and storing the   newly created bounded function and which bind() returns
        // in boundGetX 
        console.log(boundGetX);// here we can see bonudeGetX is actually getX fucntion
        // it is same as getX  
//but this bounedGetx has stored the funciton which bind() fucniton has returned after
// binding the this keyword of the unbuondedGetX fucniton to the given object-> modulee 
console.log(boundGetX());// so when called it gives 

        
        // points to note that uboundGetX is still not having access to the this.x of abject modulee
        //  const boundGetX = unboundGetX.bind(modulee);
        // bind fucniton binded the unboundGetX with moudulee and returned a new funciton which is stored in boundGetX
        // now boundGetX is same as function unboundGetX but have its this keyword pointing to object modulee