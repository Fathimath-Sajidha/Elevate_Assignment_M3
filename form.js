function validateName() {
   let nameError = document.getElementById('fullname-error')
   var name = document.getElementById(fullname)
   nameError.style.display = "none";
   if (name.value.trim() == '') {
      nameError.innerHTML = "Name cannot be Blank"
      nameError.style.display = "block";
      name.style.borderColor = "red";
      return false
   }
   else {
      return true

   }
}
function validateEmail() {
   let emailError = document.getElementById('email-error')
   let email = document.getElementById('email')
   let regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
   emailError.style.display = "none";
   if (email.value.trim() == '') {
      emailError.innerHTML = "email cannot be Blank"
      email.style.borderColor = "red";
      emailError.style.display = "block";
      return false
   }
   else if (!email.value.match(regEx)) {
      emailError.innerHTML = "Invalid email address"
      email.style.borderColor = "red";
      emailError.style.display = "block";
      return false
   }
   else {
      return true

   }

}
function validateMobNumber() {
   let mobNumError = document.getElementById('mobilenumber-error')
   let mobNum = document.getElementById('mobilenumber')
   mobNumError.style.display = "none";
   mobRegExp = /^\d{10}$/;
   if (mobNum.value.trim() == "") {
      mobNumError.innerHTML = " Cannot be blank!!"
      mobNum.style.borderColor = "red";
      mobNumError.style.display = "block";
      return false

   }

   else if (!mobNum.value.match(mobRegExp)) {
      mobNumError.innerHTML = " Please enter a valid number"
      mobNum.style.borderColor = "red";
      mobNumError.style.display = "block";
      return false
   }
   else {
      return true
   }
}



function validatePassword() {
   let passwordError = document.getElementById('password-error')
   let password = document.getElementById('password')
   passwordError.style.display = "none";
   var msg = document.getElementById('message')
   var str = document.getElementById('strength')

   if (password.value.trim() == "") {
      passwordError.style.display = "block";
      password.style.borderColor = "red";
      passwordError.innerHTML = " Cannot be blank!!"
      return false

   }
   else if (password.value.length < 8) {
      passwordError.style.display = "block";
      password.style.borderColor = "red";
      passwordError.innerHTML = " password must have atleast 8 characters"
      return false

   }
   else if (password.value.length >= 8 && password.value.length <= 10) {
      passwordError.style.display = "block";
      passwordError.innerHTML = " password is weak"
      password.style.borderColor = "red";
      passwordError.style.color = "red"
      return true

   }
   else if (password.value.length >= 11 && password.value.length <= 15) {
      passwordError.style.display = "block";
      passwordError.innerHTML = " password is Medium"
      password.style.borderColor = "yellow";
      passwordError.style.color = "yellow"
      return true
   }
   else {
      passwordError.style.display = "block";
      passwordError.innerHTML = " password is Strong"
      password.style.borderColor = "green";
      passwordError.style.color = "green"
      return true



   }



}
function validateConfPassword() {
   let confmpasswordError = document.getElementById('confpassword-error')
   let confPassword = document.getElementById('confpassword')
   let password = document.getElementById('password')
   confmpasswordError.style.display = "none";
   if (confPassword.value.trim() == "") {
      confmpasswordError.innerHTML = "cannot be blank!!"
      confPassword.style.borderColor = "red";
      confmpasswordError.style.display = "block";
      return false
   }
   else if (confPassword.value != password.value) {
      confmpasswordError.innerHTML = " Password mismatch"
      confPassword.style.borderColor = "red";
      confmpasswordError.style.display = "block";
      return false

   }
   else {
      return true
   }

}
function validateForm() {
   if (!validateName() || !validateEmail() || !validateMobNumber() || !validatePassword() || !validateConfPassword()) {
      return false
   }
   else {
      return true
   }
}
function validateName(){
   var msg=document.getElementById('message')
   var uname=document.getElementById('username')
   message.style.display="none"
   if(uname.value.length==0)
   {
       message.style.display="block"
       msg.innerHTML="please enter username"
       return false
   }
   else{
       return true
   }


}
function validatePassword(){
   let password= document.getElementById('password')
   var msg=document.getElementById('message')
   message.style.display="none"
   if (password.value.trim() == "") {
       message.style.display="block"
       msg.innerHTML="please enter username"
       return false
}
   else if(password.value.length<8){
       message.style.display="block"
       msg.innerHTML="please check the password you entered"
       return false


   }
   else {
       return true
   }


}

function signInOk(){
   if(!validateName() || !validatePassword())
   {
       return false
   }
   else{
       return true
   }
  
}

