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


// let data=fetchData("www.google.com"); 
// let file=writeFile(data);
// let response=upoadData(file,"www.drive.google.com");

// above way is wrong way to consume promise it will start doing everthing at once 

// we use 3rd property of promise ->(onfullfillment [.then()]) to consume promise object once it is  fullfilled. means it will wait till promise is complete
// the .then() takes function as argument that we want to  execute and argument function takes value property as parameter


let downloadPromise=fetchData("www.google.com"); // storing return value of fetchData in downloadPromise
downloadPromise.then(function processDownload(value){// when promise stored in downloadPromise and it is fullfilled it calls internal function//(value) is the returned promise object of the stored Promise function
          console.log("Download Promise fulfilled");
          let writePromise=writeFile(value);// passing the returend promise object
          writePromise.then(function processWrite(value){
                    console.log("writting of file completed");
                    let uploadpromise=upoadData(value,"www.drive.google.com");
                    uploadpromise.then(function processupload(value){
                              console.log("uploading of file",value);
                    });
          });
})

// it helps to relsove inversioon of control problem(not giving control of function)
// but still creates a callbackhell/promisehell 