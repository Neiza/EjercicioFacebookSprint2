
  window.addEventListener("load", function (){
    var buttonValidation = document.getElementsByClassName('btn')[0];
    buttonValidation.addEventListener("click", function(event){
      event.preventDefault();
         var user     = document.getElementById("user"),
             password = document.getElementById("password"),
             printErrorUser = document.getElementById('errorUser'),
             printErrorPass = document.getElementById('errorPassword');

         var expressionEmail=/\w+@+\w+\.+[a-z]/;

          (user.value==""  )  ?printErrorUser.innerHTML= "The field is empty": printErrorUser.innerHTML="";
          (password.value=="")?(printErrorPass.innerHTML = "The field is empty"):printErrorPass.innerHTML = "";

         (!expressionEmail.test(user.value)) ? printErrorUser.innerHTML= "The username or email is no valid" : printErrorUser.innerHTML="";
    })
  })
