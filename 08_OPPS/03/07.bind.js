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
obj();//gives error TypeError: this.getDetails is not a function

// beacuse the getDetails is a function inside object player
// and the  this keyword and we are trying to access it out side the fucniton using this keyword 
// as we know this outside is global scoped different form player this
// which is globally scoped there 
