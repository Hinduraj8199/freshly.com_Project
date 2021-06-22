var cardsContainer = document.getElementById("W-cards-cont");
var cards = document.querySelectorAll("#W-cards-cont > div");
var feedbackH2 = document.querySelectorAll("#W-cards-cont > div > h2");
var feedbackPara = document.querySelectorAll("#W-cards-cont > div > p");
var feedbackPerson = document.querySelectorAll("#W-cards-cont > div > h4");
// console.log(cards);

var replacerData = [
  {
    comment: "One of the easiest decisions I've made",
    feedback:
      "With Freshly, I don’t have to think about what I’m going to eat for lunch each day and feel good knowing that I’m eating a healthy meal. I love the convenience!",
    name: "Cindi",
  },
  {
    comment: "Amazingly delicious and convenient!",
    feedback:
      "I love that I have found freshly and that it allows me to try new things and allows me to eat healthy while remaining affordable!",
    name: "Jessica Wilson",
  },
  {
    comment: " Convenience, taste, variety",
    feedback:
      "Been a customer for more than a year now, and love it. Customer service is particularly outstanding — whenever there’s been a problem, Freshly staff respond quickly and always rectify the problem.",
    name: "Jeffrey",
  },
  {
    comment: "Delicious! So yummy!",
    feedback:
      "The convenience of a well prepared, healthy, flavorful meal with no shopping, preparing, or clean up is simply amazing. Looking forward to the rest of the week",
    name: "Kristie Geiges",
  },
];

let idx = 0;
function updateData() {
  console.log(replacerData[idx]);
  console.log(replacerData[idx + 1]);
  const { comment, feedback, name } = replacerData[idx];
  const { comment: comment1, feedback: feedback1, name: name1 } = replacerData[
    idx + 1
  ];
  // console.log(comment);
  feedbackH2[0].innerText = comment;
  console.log(comment, comment1);

  feedbackPara[0].innerText = feedback;
  feedbackPerson[0].innerText = name;

  feedbackH2[1].innerText = comment1;
  // console.log(feedbackH2.innerText);

  feedbackPara[1].innerText = feedback1;
  feedbackPerson[1].innerText = name1;

  idx = idx + 2;
  if (idx + 1 > replacerData.length - 1) {
    idx = 0;
  }
}
setInterval(updateData, 10000);
