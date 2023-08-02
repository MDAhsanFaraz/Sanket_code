function fun()
{
          teachingAssistant="vibhv";// it is declared(autoglobal) during  2nd phase execution phase 
          console.log(teachingAssistant);// print vibhv
          var teacherAssistant="faraz";// it is declared in 1st phase scoping phase
          console.log(teacherAssistant);// faraz
          
}
//  here (var teacherAssistant )is declared 1st phase as undefined then in excetution phase re-assingment  is done of  teacherAssistant = vibhv
// then in execution phase after console.log(teacherAssistant);//prints vibhv
//  again it will go to var teacherAssistant="faraz" and value will be reassinged and it wll became "faraz" 

fun();
// console.log(teacherAssistant); it will also give error beacuse it is not a auto Global it is var so it is function scoped  