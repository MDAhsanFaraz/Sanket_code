function fetchData(url)
{
          return new Promise(function (resolve,reject)
          {
                    console.log("going to start the download");
                    setTimeout(function process(){
                              let data="Dummy downloaded data";
                              console.log("Download completed");
                              resolve(data);//calling resolve means it is fullfilled
                    },5000)
                    console.log("Timer to mimic download started");
          });
}
console.log("Starting the program");
console.log("We are expecting to mimic a downloader");
x=fetchData("www.google.com")
console.log("NEw promise object created  successfully, but downloading still going");
console.log(x);