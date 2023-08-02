function fetchData(url) {
          return new Promise(function (resolve, reject) {
                    console.log("Started downloading from", url);
                    setTimeout(function processDownloading() {
                              let data = "Dummy data";
                              console.log("Download completed");
                              reject(data);
                              // console.log("hello");
                              // resolve("sanket");// these lines will not be executed as promise is fulfilled only once
                              // resolve(12345);
                    }, 7000);
          });
}
//       .then takes 2 callback function sucess callback and error callback   
let x = fetchData("google");
x.then(function sucess(value) {
          console.log("value is", value);
}, function err(err) {
          console.log("error is", err);
          return "error is found"
})
.then(function sucesss(v)
{
          console.log("value is",v);// recives the promise returned by the error callback chaning does not break
})