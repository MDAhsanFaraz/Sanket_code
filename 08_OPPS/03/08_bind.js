const player ={
          firname:"Virat",
          lastname:'Kholi',
          numberToBat:3,
          canBowl:false,
          getDetails:function()
          {
                    console.log(this.firname,this.lastname,"comes at No.",this.numberToBat);
          }
}
const obj=function()
{
          console.log(this.getDetails());
}
let x=obj.bind(player);
console.log(x);// x is bound funciton obj 
// beacuse its this keyword  is binded with object->player

// bind() creates a new fucniotn and returns it.
// Now x will have it's this keyword binded to player1
console.log(x());

      
        // points to note that obj is still not having access to the this.getDetails of abject player
        //  let x=obj.bind(player);
        // bind fucniton binded the obj function with player and returned a new funciton which is stored in boundGetX
// now x is same as function obj but have its this keyword pointing to object player