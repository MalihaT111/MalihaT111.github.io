setTimeout(() => {  
  if(localStorage.getItem("logged") === "true")
  {
    document.getElementById("signin").style.display = "none";
    document.getElementById("signup").style.display = "none";
    document.getElementById("signout").style.display = "block";
    document.getElementById("login-link").style.display = "none";
    document.getElementById("login-prompt").style.display = "none";
  } 
  else{
    document.getElementById("signin").style.display = "block";
    document.getElementById("signup").style.display = "block";
    document.getElementById("signout").style.display = "none"
    document.getElementById("login-link").style.display = "block";
    document.getElementById("login-prompt").style.display = "block";
  }
}, 100);

function login()
{
  var form = document.getElementById("login-form");

  var username = form.username.value;
  var password = form.password.value;

  console.log(username);
  
  if(localStorage.getItem(username) === password)
  {
    localStorage.setItem("logged","true");
    document.location.href = "index.html";
  }
  else{
    alert("Incorrect Username or Password");
    location.reload();
  }
}

function logout(){
  localStorage.setItem("logged","false");
}

function createAccount() {
  var form = document.getElementById("signin-form");

  var username = form.username.value;
  var password = form.password.value;
  var confirmPassword = form.confpass.value;
  
  if(password === confirmPassword)
  { 
    localStorage.setItem(username,password);
  }
}
