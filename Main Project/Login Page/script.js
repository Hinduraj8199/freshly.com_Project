function plansMenu() {
  var email1 = document.getElementById("email1").value;
  email1 = JSON.stringify(email1);
  //   var password1 = document.getElementById("password1").value;
  var email = localStorage.getItem("Email");
  //   var password = localStorage.getItem("Password");
  console.log(email, email1);
  if (email == email1) {
    alert("Login Successful");
    window.location.href = "../Main Landing Page/index.html";
  } else {
    alert("Plz enter correct email & password");
  }
}
