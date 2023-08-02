
var obj1={
          name:"sanket",
          company:"gfg",
          display:()=>{
                    console.log("inside display",this);//empty obj{}
                    console.log(this.name,"works in",this.company);//undefiend
          }
 }
 obj1.display();
//  why this happens 
// In arrow funciton we do lexcical resolution 
// we will first see that do we have definition of this.name in arrow fucniton display no
// and then we go outside where we reach global scope where this is just a empty obj

// to proof this  if we print this keyword outside In the global scope
console.log(this);// we get empty obj 

// But now if we do 
this.name="Faraz";
this.company="gfg";
console.log(this);
obj1.display();

//  we wil get { name: 'Faraz', company: 'gfg' }
// as now when arrow fucnitonn does lexical scoping and comes to gloabal scope it
// will find the that empty obj to which this keyword is pointing in the global scope has been filled with name and company values
