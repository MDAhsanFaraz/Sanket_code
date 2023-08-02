gun();
function gun()
{
          console.log("Shoot");
}
// calling function before declaring it
// in phase 1(scoping ) ->function calling is not a decalartion so it is ignored(line 1) as only decalration is scoped in phase1(line 2)
// in phase 1(scoping)-> function gun will be decalred globaly scoped 
// in phase 2 (execution)-> when phase 2 (gun () is declared globally by phase 1) so when fucntion gun() is called 
// it gets executed  it will be called as it is scoped globally we will have our output no error

// THIS PHENOMENON OF CALLIING FUNCTION BEFORE DECLARING II IS  CALLED HOISTING

// HOISTING is a direct consequence of LEXICAL scoping that happens in javascript 
// due to which we are able to access some function & variable before declarating them which gives the notion that they are moved up in the file
