const obj={
          name:"Khan",
          display:function(){
                    console.log(this,"is the calling site");
          }
}
const obj1={
          name:"faraZ",
          display:()=>{
                    console.log(this,"is the calling site");
          }
}

obj.display();
obj1.display();//in arrow fucniton this keyword is gives empty {} obj