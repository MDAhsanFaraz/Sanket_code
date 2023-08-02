// Task 
// 1.Write a function to download the data form url
// 2.Write a function to save the downloaded data in a file and return the filename //mimic the function
// 3.Write a function to upload file written in previous step to a newurl //mimic the function


function fetchCustom(url, fn)//Task 1.// we are mimicing the function
{
          // download the content from the url
          // this downloading can take some time
          // we will download content from url and then whatever is result, we will pass to the callback
          console.log("starting downloading from ",url);
          setTimeout(function process() {
                    console.log("Download completed");
                    let response = "Dummy data";
                    console.log("ending of fetch ");
                    fn(response); 

          }, 3000);

}
function writeFile(data, fn)//Task 2
{
          // this function writes data in a new file
          console.log("started writting data", data);
          setTimeout(function process() {
                    console.log("writting completed");
                    let filename = "output.text";
                    console.log("Writting ended");  
                    fn(filename);
          }, 4000);

}

function uploadfile(filename, newurl, fn)//task 3
{
          console.log("Upload started");
          setTimeout(function process() {
                    console.log("File", filename, "upload successfully on", newurl);
                    let uploadResponse = "SUCCESS";
                    fn(uploadResponse);

          }, 2000);
}
// Calling of all the function//CALLBACK HELL
fetchCustom("www.google.com", function downloadcallback(response) {
          console.log("Downloaded response is", response);
          writeFile(response, function writeCallback(filenameResponse) {
                    console.log("new file written is", filenameResponse);
                    uploadfile(filenameResponse, "www.drive.google.com", function uploadCallback(uploadResponse) {
                              console.log("Successfully uploaded", uploadResponse);
                    });
          });
});


