

function test() {
          for (let i = 0; i < 3; i++) 
          {/// new block starts
                    setTimeout(function exec() {
                              console.log((`i: ${i}`));// backticks can be used to make //"i"+i
                    }, i*3000);
          }//block ends
}
test();// why output is     
//      i: 0
//      i: 1
//      i: 2
// let it is blocked scoped and( for loop) is a block for every new loop each block of (for loop) remmembres the value of i which enters the block due to closures
// as due closures its internal function remmebres the lexical scoping of the varibale till its work is not completely done
// here for loop finishes its looping 
// for i=0 it enters the block and enters setTimeout and block remmbres i as 0
// for =1 same thing
// for =2 same thing
// and( for loop )stops after i becames 3
// after foor loop execution setTimeout prints the value of i according to what it remmembers for the specific block