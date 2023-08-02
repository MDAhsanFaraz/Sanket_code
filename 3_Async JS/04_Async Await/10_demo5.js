function  fetchData(url)
{
          return new Promise(function(resolve,reject){
                    console.log("Started downloading from ",url);
                    resolve("dosdfsdne");
                    // setTimeout(function processDownloading(){
                    //           let data="Dummy data";
                    //           console.log("Download Complete");
                    //           resolve(data);//data will be returned
                    // },7000);
          });
}
 async function processing(){
          console.log("Entering processing");
          let value1=await fetchData("www.youtube.com");
          console.log("youtube downloading done");
          let value2=await fetchData("www.google.com");
          console.log("google downloading done");
          console.log("Exiting  processing");
          return value1+value2;
 }
 console.log("Start");
 setTimeout(function timer1()
 {
          console.log("timer 1");
 },0);
 let x=processing();
 x.then(function (value){
          console.log("finally processing promise resolves with",value);

 });
 setTimeout(function timer2(){console.log("timer 2 ");},1000);
 setTimeout(function timer3(){console.log("timer 3 ");},0);
 console.log("end");
