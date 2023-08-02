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




// solving promisehell
 let downloadpromise=fetchData("www.google.com");
 let x=downloadpromise.then(function processdDownload(value){//.then function returns a new promise 
          console.log("Downloading is done with the following value",value);
          return "sanket";//.then function returns a promise we cannot use (resolve )here but value can be returned and if we dont return undefiend is returned
 });
 x.then(function process(value)
 {
          console.log("x promise is",value);// printing resolved promise ogject of downloadPromise.then
 });
 // we can chain .then