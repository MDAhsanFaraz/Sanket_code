var teacher="Sanket";// global scoped var  in p1
function fun()// global scoped var  in p1
{
          teacher="pulkit";// re assingment of teacher in p2//didn't became autoglobalas it was decalred in global scope
          console.log("HI",teacher);
}
fun();//HI pulkit
console.log(teacher);// pulkit
                    