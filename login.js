const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
let encodedPassword = ("YTI5NWU0MiFAc2xvcEVHYW1lISQ=");
let decodedPassword = window.atob(encodedPassword);

loginButton.addEventListener("click", (e) => {
   
   e.preventDefault();
   
   const username = loginForm.username.value;
   
   const password = loginForm.password.value;
   
   if (username === "ls120cbaJp" && password === decodedPassword) {
      
      alert("You have successfully logged in.");
      
      document.cookie = "login=True";
      
      let loginTrue = document.cookie;
      
      console.log(loginTrue);
      
      if (loginTrue === "login=True") {
         window.location.replace("https://datlickk421503912fo3e35fjdgket353kjj3l.github.io/Ko3h2hlrkjdhflkj3hklgrjfKo3h2hlrkjdhflkj3hklgrjfKo3h2hlrkjdhflkj3hklgrjfKo3h2hlrkjdhflkj3hklgrjf/30523750971092740927507093709270975093275092735.html");
         //figure out how to delete the cookie here so you can't access again (security)
      } else {
         alert("No brute forcing :/");
      }
      
   } else {
      loginErrorMsg.style.opacity = 1;
   }
})
