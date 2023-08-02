// undecelarred vs undefined

function fun1()
{
          var teacher="Pulkit";
          console.log(teacher,teachingAssistant);// now it will throw error as it is used before assing value
          teachingAssistant="vibhav";
}
function gun()
{
          console.log(subject);// here also subject is used before assing any value to it// BUT no error it will print undefined because var is the data type and during phase 1(scoping) is done and it is funciton scoped it is stored in memory as undefined
          var subject="JS";
}
// in var during the 1st phase of compilition in javaScript it  defines scopes for each decalared value and var is global scoped 
// so subject here is funciton sccped but value was not stored in it just a empty box(undefined) in memory was created so it will not give error   
// value is stored in 2nd phase execcution
gun();
