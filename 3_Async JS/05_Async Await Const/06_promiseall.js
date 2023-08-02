// Tasks:
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl

function fetchData(url) {
          return new Promise(function (resolve, reject) {
              console.log("Started downloading from", url);
              setTimeout(function processDownloading() {
                  let data = "Dummy data";
                  console.log("Download completed");
                  resolve(data);
                  // console.log("hello");
                  // resolve("sanket");// these lines will not be executed as promise is fulfilled only once
                  // resolve(12345);
              }, 7000);
          });
      }
      
      function writeFile(data) {
          return new Promise(function (resolve, reject) {
              console.log("Started writing ", data, " in a file");
              setTimeout(function processWriting() {
                  let filename = "result.txt";
                  console.log("File written successfully");
                  resolve(filename);
              }, 3000);
          });
      }
      
      function uploadData(file, url) {
          return new Promise(function (resolve, reject) {
              console.log("Upload started on url", url, "filename is", file);
              setTimeout(function processUpload() {
                  let result = "SUCCESS";
                  console.log("Uploading done");
                  resolve(result);
              }, 5000);
          });
      }
// The Promise.all() static method takes an iterable of promises as input and returns a single Promise. 
// This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed),
//  with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.
let downloadPromise= fetchData("www.google.com");
let writePromise=writeFile("dummy data");
let uploadPromise=uploadData("test.txt","drive.google.com");
console.log("start");
Promise.all([downloadPromise,writePromise,uploadPromise]).then(function process(value){
          console.log(value);// all the resolved value will be inside value as an array
})
//  here it is shown how the primise.all is used