var $ = document;
const loaderElem = document.querySelector('.loader')
window.addEventListener("load", function(){
  loaderElem.classList.add('hidden')
})

 function _id(id_name) {
   return $.getElementById(id_name);
 }

 function _class(class_name) {
   return $.getElementsByClassName(class_name);
 }

 var togglePassword = _class("toggle-password");
 var passwordField = _id("password-field");

 togglePassword[0].addEventListener("click", function () {
   if (passwordField.type == "text") {
     passwordField.type = "password";
     togglePassword[0].classList.remove("active");
   } else {
     passwordField.type = "text";
     togglePassword[0].classList.add("active");
   }
 })

 var iconLoading = document.querySelector(".fa-spinner")
 iconLoading.addEventListener("click", function(){
  iconLoading.style.diplaye = 'inline'
 })



 const form = document.querySelector('form');
        form.addEventListener('submit' , validate);
 
     function validate(event){
	 const user = document.getElementById('user');
     const codeMeli = document.getElementById('codeMeli');
     const email = document.getElementById('email');
     const pass = document.getElementById('password-field');
	 const usererror = document.getElementById('usererror');
	 const codeMeliEror = document.getElementById('codeMeliEror');
	 const emailEror = document.getElementById('emailEror');
	 const passerror = document.getElementById('passEror');
	 usererror.textContent = '';
     codeMeliEror.textContent = '';
     emailEror.textContent = '';
	 passerror.textContent = '';
 
 	 if(user.value.length < 5 || user.value.length > 15){
 	 	usererror.textContent = 'نام کاربری باید 5 تا 15 کاراکتر باشد';
 	 	event.preventDefault();
 	 }
      if(codeMeli.value.length < 10){
           codeMeliEror.textContent = 'کد ملی باید دارای 10 کاراکتر باشد';
           event.preventDefault();
      } 
      if(email.value.indexOf("@") === -1 && email.value.indexOf(".") === -1){
           emailEror.textContent = 'ایمیل باید عبارت "@" و "." داشته باشد';
           event.preventDefault();
     } 
	 if(pass.value.length < 6 || pass.value.length > 20){
	 	passerror.textContent ='کلمه‌ی عبور باید 6 تا 20 کاراکتر باشد';
	 	event.preventDefault();
	  } 
     } 