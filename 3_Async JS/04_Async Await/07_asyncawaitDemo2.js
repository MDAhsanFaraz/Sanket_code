function resolveAfter2Seconds() {
          return new Promise(resolve => {
                    setTimeout(() => {
                              resolve('resolved');
                    }, 6000);
          });
}

async function asyncCall() {
          console.log('calling');
          const result = await resolveAfter2Seconds();//await keyword stop the code till timer is done this does not happen if await not used
          console.log(result);
          console.log('calling2');

}

asyncCall();
