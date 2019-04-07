// Declaring variable for SignUp Modal
var signUpModal = document.getElementById('signup-modal');

// Declaring variable for SignUp Button
var btn = document.getElementById("signup-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-signup")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    signUpModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    signUpModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  } else if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
}

// Declaring variable for SignIn Modal
var signInModal = document.getElementById('signin-modal');

// Get the button that opens the modal
var signin_btn = document.getElementById("signin-button");

// Get the <span> element that closes the modal
var signin_span = document.getElementsByClassName("close-signin")[0];

// When the user clicks on the button, open the modal 
signin_btn.onclick = function() {
  var signInModal = document.getElementById('signin-modal');
  signInModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signin_span.onclick = function() {
  var signInModal = document.getElementById('signin-modal');
  signInModal.style.display = "none";
}

var signup_link = document.getElementById("signup-link");

signup_link.onclick = function() {
  var signInModal = document.getElementById('signin-modal');
  signInModal.style.display = "none";
  signUpModal.style.display = "block";

}