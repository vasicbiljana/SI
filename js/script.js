/* LOGIN FORM VALIDATION */


function validation(){
    var emailRegexp = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/;
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if(email.value.trim() === "" || password.value.trim() === ""){
        emailError.textContent = "Polje za email je prazno";
            passwordError.textContent = "Polje za lozinku je prazno!";
            emailError.style.color = "red";




}

}
        


const select = document.querySelector('tbody');
const inner = select.querySelector('td');



$(document).ready(function(){

    $(function() {
        $(".termin").on("click", function(e) {  // selects any element
            e.stopPropagation(); // stops click event from bubbling up from child
            $(".widget-selected").removeClass("widget-selected"); // remove all previously selected classes
            $(this).addClass("widget-selected"); // add our new class
        });
    })
  });