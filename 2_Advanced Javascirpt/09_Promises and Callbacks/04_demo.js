function test() {
          for (var i = 0; i < 3; i++) {
                    setTimeout(function exec() {
                              console.log((`i: ${i}`));// backticks can be used to make //"i"+i
                    }, i* 3000);
          }
}
test();// why output is     i: 3
//      i: 3
//      i: 3// due to var because var function scoped
// here once the for loop starts it makes i =3 and 
// after waiting time of the setTimeout() it prints 3 for every called setTimeout function waiting to execute  
// reason is that var is functional scoped so once the for loop starts 
// for i=0 goes in setTimeout() the waiting time is i*3000=0*3000=0
// this means it should print i at 0 but internally it needs bit more time to execute setTimeout() so in that duration of time for loop completes running 3 times
//  and makes the var i=3
//  and when time required to run setTimeout completes it prints 3 at instant 
// then at for i=1   its waiting time was 1*3000; it prints after 3 sec
// for i=2  waiting time was 2*3000; it prints after 6 sec
// NOTE always prints 3 as var is functional scoped it will remain same for while function test() once becames 3. 
// main reason is the closusers as internal function remmebers the latest value of the varible 
// which for i was changed to 3