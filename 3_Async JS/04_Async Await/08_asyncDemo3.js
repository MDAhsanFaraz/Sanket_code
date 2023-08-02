function resolveAfter2Seconds() {
          return new Promise(resolve => {
                    setTimeout(() => {
                              resolve('resolved');
                    }, 6000);
          });
}

async function asyncCall() {
          console.log('calling');
          const result = await resolveAfter2Seconds();//await keyword stop the code till promise is not resolved 
                                                  // this does not happen if await not used
          console.log(result);
          console.log('calling2');

}
console.log("hii");
asyncCall();
console.log("byee");
// here you can see global does not wait for the function to complete 
// inside async  function only async behaviour appears that it is waiting for setTimeout to complete and return resolved promise
// global code keeps executing