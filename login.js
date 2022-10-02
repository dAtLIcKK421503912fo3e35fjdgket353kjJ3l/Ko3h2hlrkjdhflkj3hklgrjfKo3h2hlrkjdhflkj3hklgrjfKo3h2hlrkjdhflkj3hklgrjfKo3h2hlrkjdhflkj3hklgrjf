const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
let encodedPassword = ("YTI5NWU0MiFAc2xvcEVHYW1lISQ=");
let decodedPassword = window.btoa(encodedPassword);
//a295e42!@slopEGame!$
loginButton.addEventListener("click", (e) => {
   e.preventDefault();
   const username = loginForm.username.value;
   const password = loginForm.password.value;
   if (username === "ls120cbaJp" && password === "a295e42!@slopEGame!$") {
      alert("You have successfully logged in.");
      window.location.href("unity.html");
   } else {
      loginErrorMsg.style.opacity = 1;
   }
})
