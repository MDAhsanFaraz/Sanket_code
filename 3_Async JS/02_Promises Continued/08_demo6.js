
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



//solving promise hell by returning promise form .then() function and  chaining .then() funciton  to catch the returned value 
let downloadpromise=fetchData("www.google.com");
downloadpromise.then(function processdDownload(value){//.then function returns a new promise 
         console.log("Downloading is done with the following value",value);
         return value;//returnning promise
})
.then(function processWrite(value){//consuming above .then() returned  promise
          console.log("inside processwrite");
          return writeFile(value)//returnning promise
})
.then(function processupload(value){//consuming above .then() returned  promise
          console.log("insde processupload");
          return upoadData(value,"www.drive.google.com");//returnning promise
          
})
.then(function process(value){
          console.log("done With Remark",value);
});
console.log("Ended");//it prints before  .then() 
// .then()  only registers your function in (onfullfillment array) and moves forward. it  waits to complete other golbal code 

// promise flow chart  it also show .then returns a promise 

// READ THIS BEST ARTICLE -:// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
