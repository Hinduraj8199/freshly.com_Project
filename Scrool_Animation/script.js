var boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkPositionOfBoxes);
checkPositionOfBoxes();

function checkPositionOfBoxes() {
  var triggerBottom = (window.innerHeight / 5) * 4;
  console.log(triggerBottom);
  boxes.forEach((box) => {
    var boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
