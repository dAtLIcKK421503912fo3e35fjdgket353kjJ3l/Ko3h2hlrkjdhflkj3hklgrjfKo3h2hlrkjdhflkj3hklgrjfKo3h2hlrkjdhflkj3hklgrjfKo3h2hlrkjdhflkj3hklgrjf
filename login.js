const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
let encodedPassword = ("YTI5NWU0MiFAc2xvcEVHYW1lISQ=");
let decodedPassword = window.btoa(encodedPassword);

loginButton.addEventListener("click", (e) => {
   e.preventDefault();
   const username = loginForm.username.value;
   const password = loginForm.password.value;
   if (username === "ls120cbaJp" && password === "a295e42!@slopEGame!$") {
      alert("You have successfully logged in.");
      document.cookie = "login=True";
      let loginTrue = getCookie("login");
      if (loginTrue === "True") {
         window.location.replace("https://datlickk421503912fo3e35fjdgket353kjj3l.github.io/Ko3h2hlrkjdhflkj3hklgrjfKo3h2hlrkjdhflkj3hklgrjfKo3h2hlrkjdhflkj3hklgrjfKo3h2hlrkjdhflkj3hklgrjf/unity.html")
         //figure out how to delete the cookie here so you can't access again (security)
      } else {
         alert("No brute forcing :/");
   } else {
      loginErrorMsg.style.opacity = 1;
   }
})
