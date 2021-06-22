var cards = document.querySelectorAll("#cards-container > div");
console.log(cards);
cards.forEach((card) => {
  card.addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "flex";
  });
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".bg-modal").style.display = "none";
  });
});
