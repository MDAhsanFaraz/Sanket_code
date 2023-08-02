// select the buttons
let yesbtn=document.getElementById('yes');
let nobtn=document.getElementById('no');

yesbtn.addEventListener('click',submit);
nobtn.addEventListener('click',submit);

nobtn.addEventListener('mouseover',function()
{
        nobtn.innerHTML='Yes';   
        yesbtn.innerHTML='No' ;
})
nobtn.addEventListener('mouseout',function()
{
        nobtn.innerHTML='No';   
        yesbtn.innerHTML='Yes' ;
})
function submit()
{
          window.alert("congratulations you got  a date with me ")
}