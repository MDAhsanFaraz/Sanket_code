function process ()
{
      console.log("start");    
      setTimeout(function exec()
      {
          console.log("Executed some task");
      },5000);
      setTimeout(function exec()
      {
          console.log("Executed some task2");// this setTimeout was send in the event queue first then the 5000 one 
      },2000)
      for(let i=1;i<1000000000;i++)
      {
          // some task
      }
      console.log("end");
}
process(); 
console.log("faraz");  