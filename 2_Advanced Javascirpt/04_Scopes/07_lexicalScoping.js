var teacher="sanket";
function fun ()
{
          console.log(subjects);// undefined//lexical scoping of subjects as it was known to scope manager 
          // that there is subject in function  fun scope but only socping is done in phase 1 not assingment of value of it gives undefined 
          // as subject is declared but not defined  (assingment of values happens in phase 2 -(execution))
          var teacher="pulkit";
          var subjects="JavaScript";// in the parsing phase it will give suject scoping of funciton which will lead to lexical scoping
          teachingassistant ="vibhav";//auto Globals
          console.log(teacher);
          console.log(teachingassistant);
}
fun(); 
console.log(teacher);
console.log(teachingassistant);
// undefined is a variable state when the scopes already know about it but in the execution  phase we have not allocated it a value .
// undeclared is a variable state when we never
// formally declared a variable & before assigning
// it a value so that it has chance to become
// autoglobal , we try to use it