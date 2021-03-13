var toggles = document.querySelectorAll(".faq-toggle");
var titles = document.querySelectorAll(".faq-title");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
titles.forEach((title) => {
  title.addEventListener("click", () => {
    title.parentNode.classList.toggle("active");
  });
});

function gotoPlansMenu() {
  var email = document.getElementById("email").value;
  var zip = document.getElementById("zip").value;
  console.log(email, zip);

  localStorage.setItem("Email", JSON.stringify(email));
  localStorage.setItem("ZIP", JSON.stringify(zip));
  window.location.href = "../Plans_&_Menu/p&m_row1&3.html";
}
