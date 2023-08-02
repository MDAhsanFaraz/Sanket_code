// phase 1-p1
// phase 2 -p2
function fun(val)// in p1-> fun becames global scoped
{
          var student;// in p1-> becames function fun scoped  
}
function run()// in p1-> run becames global scoped
{
          console.log(student);// prints value of student as it is global scoped
}
student=10;//in p2->this will became autoglobal during execution phase
function gun()// in p1-> gun becames global scoped
{
          console.log(student);// this will print student value 10 as it is autoglobal 
          student=100;//re assingment of value to 100
}
gun();//10
run();//100