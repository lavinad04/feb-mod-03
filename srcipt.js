document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signupForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");
  
    function validateEmail() {
      const emailValue = emailInput.value;
      if (emailValue.length < 3 || !emailValue.includes("@") || !emailValue.includes(".")) {
        emailError.textContent = "Make sure email is more than 3 characters and has @ and a.";
        return false;
      }
      emailError.textContent = "";
      return true;
    }
  
    function validatePassword() {
      const passwordValue = passwordInput.value;
      if (passwordValue.length < 8) {
        passwordError.textContent = "Make sure password is more than 8 characters.";
        successMessage.textContent = "";
        return false;
      }
      else{
        passwordError.textContent = "";
      successMessage.textContent = "ALL GOOD TO GO ";
      return true;}
    }
  
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
  
      if (validateEmail() && validatePassword()) {
        if (confirm("Are you sure you want to sign up?")) {
          alert("Successful signup!");
          form.reset();
        }
      } else {
        alert("Please fix the errors before submitting.");
      }
    });
  });
  