 var obj={
          name:"faraz",
          company:"Google",
          display:function(){
                    console.log(this);
                    console.log(this.name,"works in",this.company);
          }
 }
 obj.display();
  
//  but if we do arrow funciton

var obj1={
          name:"sanket",
          company:"gfg",
          display:()=>{
                    console.log(this);
                    console.log(this.name,"works in",this.company);//undefiend
          }
 }
 obj1.display();

 var obj2={
          name:"sarthak",
          company:"ph",
          display:function(){
                    console.log(this);
                    setTimeout(()=>{
                              console.log(this.name,"works in",this.company);//undefiend

                    },3000);
          }
 }
 obj2.display();

 var obj3={
          name:"pilu",
          company:"gs",
          display:()=>{
                    console.log(this);
                    setTimeout(()=>{
                              console.log(this.name,"works in",this.company);//undefiend

                    },3000);
          }
 }
 obj3.display();


//  what is the behaviour of this keyword with arrow function