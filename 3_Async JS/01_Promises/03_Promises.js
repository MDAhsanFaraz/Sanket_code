// promises is the solution to disadvantages of callback function
// Promises are special JS objects that are also considered readblity enhancers. it is immediately returned from a function setup
// to return a promise. 
// They act as placeholders for the data we hope to get back from some future tasks
// → we also attach the functionality we want to defer until the future task is done  And promise automatically handle exectuion
// of this functionality

// So promises do two things ->one inside JS & ->one outside JS
// 1) It signs up the process required run in the runtime & gives a placeholder in JS, which has a value property
// how to create and consume a promise

function fetchCustom(url)
{
          // download the content from the url
          // this downloading can take some time
}