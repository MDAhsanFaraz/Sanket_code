//JS as two phase while executing the code js does two runs of the code 
//  1 st pahse parsing ->scoping and 2nd phase -> execution
var teacher="Sanket";

function fun()
{
          var teacher="Pulkit";
          teachingAssistant="vibhav";//elligible for becaming autoGlobal // we are first allocating value then using the value
          console.log(teacher,teachingAssistant);
}
// console.log(teachingAssistant);// it will throw error till now it is not defined global
console.log(teacher);
fun();// as you can see after calling fun teacherAssistant becames global now we can print it  
console.log(teachingAssistant);

// here in teachingAssinstant whenever a value is defined with no data type it automatically becames global variable
// BUT






