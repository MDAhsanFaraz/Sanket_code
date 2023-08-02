"use strict";//  to stop undecalared variable from becaming autoGlobals

function fun()
{
          teachingAssistant="JD";//autoGlobal//if "use strict"; is used gives ->error //if not used gives o/p 
          console.log(teachingAssistant);
}
fun();