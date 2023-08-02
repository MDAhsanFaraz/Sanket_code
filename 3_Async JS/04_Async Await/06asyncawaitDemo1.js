
// Task 
// 1.Write a function to download the data form url
// 2.Write a function to save the downloaded data in a file and return the filename //mimic the function
// 3.Write a function to upload file written in previous step to a newurl //mimic the function

function  fetchData(url)
{
          return new Promise(function(resolve,reject){
                    console.log("Started downloading from ",url);
                    setTimeout(function processDownloading(){
                              let data="Dummy data";
                              console.log("Download Complete");
                              resolve(data);//data will be returned
                    },7000);
          });
}
function writeFile(data)
{
          return new Promise(function (resolve,reject){
                    console.log("Strated writing ",data ,"in a file");
                    setTimeout(function processWriting(){
                              let filename="result.txt";
                              console.log("File written successfully");
                              resolve(filename);
                    },3000);
          });
}
function upoadData(file,url)
{
          return new Promise(function(resolve,reject){
                    console.log("upload started on url",url,"filename is",file);
                    setTimeout(function processUpload(){
                              let result="SUCCESS";
                              console.log("UPloading done");
                              resolve(result);
                    },5000);
          });
}

// if you declare a function async it allows consumption of a promise using await 
// await can only be used inside async
// async function always convert return value to promise
// await works same as .then() it  is just cleaner version without chaining 
// await returns resolved promise 
// INSIDE await everthing looks syncronized but it is not 
async function processing()//declaring a function processing async
{
          let downloadedData=await fetchData("www.google.com");// it waits and haults the code till the function returns data inside resolved promise not a p 
          console.log("Downloading await completed",downloadedData );
          let file=await writeFile(downloadedData);
          console.log("writing await completed",file);
          let uplaodedResponse=await upoadData(file,"www.drive.google.com");
          console.log("uploading await completed");
          console.log("Completed process with response",uplaodedResponse);
          return true; //async function returns a promise it willl convert true into promise

}
console.log("start");
let p=processing();
console.log(p);//p is a promise as async only returns promise
console.log("end");
