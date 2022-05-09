/* CONTACT FORM VALIDATION */
let btnContact = document.getElementById("btnContact");
let fnameContact = document.getElementById("fname");
let lnameContact = document.getElementById("lname");
let emailContact = document.getElementById("email");
let messContact = document.getElementById("mess");
let errorFname = document.getElementById("error-fname");
let errorLname = document.getElementById("error-lname");
let errorEmail = document.getElementById("error-email");
let errorMess = document.getElementById("error-mess");


function validateContact() {
      
    if( fnameContact.value == "" ) {
        errorFname.textContent = "Polje za ime ne sme biti prazno!"
    }
    if( lnameContact.value == "" ) {
        errorLname.textContent = "Polje za preime ne sme biti prazno!"
    }
    if( emailContact.value == "" ) {
        errorEmail.textContent = "Polje za email ne sme biti prazno!"
    }
    if( messContact.value == "" ) {
        errorMess.textContent = "Polje za poruku ne sme biti prazno!"
    }
 }
 
/* LOGIN FORM VALIDATION */
let btnLogin = document.getElementById("btnLogin");
let usernameLogin = document.getElementById("username-login");
let passLogin = document.getElementById("pass-login");

let errorUsernameLogin = document.getElementById("error-username-login");
let errorPassLogin = document.getElementById("error-password-login");

function validateLogin() {
      
    if( usernameLogin.value == "" ) {
        errorUsernameLogin.textContent = "Polje za korisničko ime ne sme biti prazno!"
    }
    if( passLogin.value == "" ) {
        errorPassLogin.textContent = "Polje za lozinku ne sme biti prazno!"
    }
  
 }

 /* REGISTRATION FORM VALIDATION */
 let btnRegistartion = document.getElementById("btnRegistartion");
 let fnameReg = document.getElementById("fname-reg");
 let lnameReg = document.getElementById("lname-reg");
 let emailReg = document.getElementById("email-reg");
 let phoneReg = document.getElementById("phone-reg");
 let usernameReg = document.getElementById("username-reg");
 let passReg = document.getElementById("pass-reg");


 let errorFnameReg = document.getElementById("error-fname-reg");
 let errorLnameReg = document.getElementById("error-lname-reg");
 let errorEmailReg = document.getElementById("error-email-reg");
 let errorPhoneReg = document.getElementById("error-phone-reg");
 let errorUsernameReg = document.getElementById("error-username-reg");
 let errorPassReg = document.getElementById("error-pass-reg");
 
 function validateRegistartion() {
       
     if( fnameReg.value == "" ) {
        errorFnameReg.textContent = "Polje za ime ne sme biti prazno!"
     }
     if( lnameReg.value == "" ) {
        errorLnameReg.textContent = "Polje za prezime ne sme biti prazno!"
     }
     if( emailReg.value == "" ) {
        errorEmailReg.textContent = "Polje za email ne sme biti prazno!"
     }
     if( phoneReg.value == "" ) {
        errorPhoneReg.textContent = "Polje za telefon ne sme biti prazno!"
     }
     if( usernameReg.value == "" ) {
        errorUsernameReg.textContent = "Polje za korisničko ime ne sme biti prazno!"
    }
    if( passReg.value == "" ) {
        errorPassReg.textContent = "Polje za lozinku ne sme biti prazno!"
    }
  }


/* PAYMENT FORM VALIDATION */

let fnamePay = document.getElementById("fname-pay");
let lnamePay = document.getElementById("lname-pay");
let emailPay = document.getElementById("email-pay");
let phonePay = document.getElementById("phone-pay");
let adress = document.getElementById("adress");
let adressNum = document.getElementById("num-address");
let city = document.getElementById("city");
let cityNum = document.getElementById("city-number");


let errorFnamePay = document.getElementById("error-fname-pay");
let errorLnamePay = document.getElementById("error-lname-pay");
let errorEmailPay = document.getElementById("error-email-pay");
let errorPhonePay = document.getElementById("error-phone-pay");
let errorAdress = document.getElementById("error-adress");
let errorAdressNum = document.getElementById("error-adressNum");
let errorCity = document.getElementById("error-city");
let errorCityNum = document.getElementById("error-cityNum");



function validatetPayment() {
      
    if( fnamePay.value == "" ) {
        errorFnamePay.textContent = "Polje za ime ne sme biti prazno!"
    }
    if( lnamePay.value == "" ) {
        errorLnamePay.textContent = "Polje za preime ne sme biti prazno!"
    }
    if( emailPay.value == "" ) {
        errorEmailPay.textContent = "Polje za email ne sme biti prazno!"
    }
    if( phonePay.value == "" ) {
        errorPhonePay.textContent = "Polje za telefon ne sme biti prazno!"
    }
    if( adress.value == "" ) {
        errorAdress.textContent = "Polje za adresu ne sme biti prazno!"
    }
    if( adressNum.value == "" ) {
        errorAdressNum.textContent = "Polje za kućni broj ne sme biti prazno!"
    }
    if( city.value == "" ) {
        errorCity.textContent = "Polje za grad ne sme biti prazno!"
    }
    if( cityNum.value == "" ) {
        errorCityNum.textContent = "Polje za poštanski broj ne sme biti prazno!"
    }
 }




$(document).ready(function(){

    $(function() {
        $(".termin").on("click", function(e) {  // selects any element
            e.stopPropagation(); // stops click event from bubbling up from child
            $(".widget-selected").removeClass("widget-selected"); // remove all previously selected classes
            $(this).addClass("widget-selected"); // add our new class
        });
    })
  });