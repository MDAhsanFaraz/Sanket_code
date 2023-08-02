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
const obj=function(c,s)
{
          console.log(s+c);
          console.log(this.getDetails());
}
obj.call(player);//calll fucntion does not return a new fucniton
// it directly calls fucniton with its this keyword binded with  which ever object is passed
obj.call(player,23,24);// and we after obj we can pass parameters of fucniton obj
obj.apply(player,[23,24]);//same as call just need argument is aray form

