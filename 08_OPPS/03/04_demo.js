// it we add anything in the out side this(global socpe ) 
this.package ="12 lpa"
var data={
          name:"faraz",
          company:"Google",
          display:function(){
                    console.log(this);
                    console.log(this.name,"works in",this.company,"salary ",this.package);
                    // try to acces inside the new data member inside the display fucniton 
                    // undifiend as it is not defined inside obj scope
          }
 }
data.display();
console.log(this);// here in global scope we can access pacakage
//  we can also conclude another thing which is lexical scoping is not done is normal funciton 
// as it does go out side and searchs  in tht global scoped this keyword