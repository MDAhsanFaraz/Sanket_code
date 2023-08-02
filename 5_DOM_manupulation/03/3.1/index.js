// grab the form element
let form =document.getElementById("form");

//  add the event listner
form.addEventListener('submit',function(){
          event.preventDefault();   
          console.log("I will handle the submition ");
          console.log(event);
          let username= document.getElementById('username');
          let password= document.getElementById('password');
          console.log(username.value);
          if(username.value=='faraz'&&password.value=='1234')
          {
                    console.log("user matched");
          }
});

// check right input
// then submit 