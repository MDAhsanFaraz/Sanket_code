console.log("Start of the file");//native code 1st prints this 
setTimeout(function Timer1(){// sends to runtime and start the timer immediately
          console.log("Timer 1 done");
},0);
for(let i=0;i<1000000000;i++)//runs syncroniously as it is a native code
{

}
let x=Promise.resolve("Sanket's promise")//Promise is a jS native function so retuns resolved promise to x
x.then(function processPromise(value)// .then function registers itself to( onFullfillment array) and the
{  // call back function processPromise() is sent inside onFullfillment array[] waits till its is resolved .it can take more time
// but here the promise is  already resolved. so that here  we dont hinder the flow to js
          console.log("Whose pomise?",value);// so it goes inside microtask queue and waits till all global code is executed
});
setTimeout(function timer2(){// sends to runtime and start the timer immediately
          console.log("Timer 2 is done");
},0);
console.log("End of the file");//native code 

// as we know the callback funciton in the setTimeout is send to the event queue after its timer is completed but not in .then()
// the callback funciton in the .then() is send to the  microtaskqueue

// MICROTask queue has higer priority then event queue so the callback function of .then() which is inside micro task queue is executed before event queue

//  as  timer1  is called first and its timer finihes fisrt as it is only  0 
// it is send to event queue first. then timer 2 is send to event queue and (queue is first in first out) 
// set timer 1 prints before timer 2