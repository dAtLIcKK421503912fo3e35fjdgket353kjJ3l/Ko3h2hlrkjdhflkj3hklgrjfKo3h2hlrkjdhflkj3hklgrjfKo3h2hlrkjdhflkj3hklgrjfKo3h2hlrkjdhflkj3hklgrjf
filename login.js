const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
let encoded-password = ("YTI5NWU0MiFAc2xvcEVHYW1lISQ=");
let decoded-password = window.btoa(encoded-password);
//a295e42!@slopEGame!$
loginButton.addEventListener("click", (e) => {
   e.preventDefault();
   const username = loginForm.username.value;
   const password = loginForm.password.value;
   if (username === "ls120cbaJp" && password === decoded-password) {
      alert("You have successfully logged in.");
      window.location.href("unity.html");
   } else {
      loginErrorMsg.style.opacity = 1;
   }
})
