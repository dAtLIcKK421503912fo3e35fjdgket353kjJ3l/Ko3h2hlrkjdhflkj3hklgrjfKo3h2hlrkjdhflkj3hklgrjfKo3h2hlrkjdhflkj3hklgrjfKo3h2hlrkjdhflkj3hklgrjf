const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
let encoded - password = ("YTI5NWU0MiFAc2xvcEVHYW1lISQ=");
let decoded - password = window.atob(encoded - password);
//a295e42!@slopEGame!$
loginButton.addEventListener("click", (e) => {
   e.preventDefault();
   const password = loginForm.password.value;
   if (password === decoded - password) {
      alert("You have successfully logged in.");
      window.location.replace("unity.html");
   } else {
      loginErrorMsg.style.opacity = 1;
   }
})
