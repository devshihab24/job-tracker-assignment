// global variables
let interviewList = [];
let rejectedList = [];
const allItemsBtn = document.getElementById("all-items");
const interviewItemsBtn = document.getElementById("interview-items");
const rejectedItemsBtn = document.getElementById("rejected-items");
const availJobs = document.getElementById("available-jobs");
const interviewCardsContainer = document.getElementById("interview-cards");

function display(id) {
  // remove active class
  allItemsBtn.classList.remove("active-btn");
  interviewItemsBtn.classList.remove("active-btn");
  rejectedItemsBtn.classList.remove("active-btn");
  // add common class
  allItemsBtn.classList.add("common-btn");
  interviewItemsBtn.classList.add("common-btn");
  rejectedItemsBtn.classList.add("common-btn");
  // add active class on clicked btn
  document.getElementById(id).classList.add("active-btn");
}

// calculate job status

function calculate() {
  availJobs.innerText = `${document.getElementById("all-cards-container").children.length} jobs`;
  document.getElementById("total-count").innerText = document.getElementById(
    "all-cards-container",
  ).children.length;
}

// main function
document.querySelector("main").addEventListener("click", function (event) {
  const parentNode = event.target.parentNode.parentNode;

  if (event.target.classList.contains("interview-btn")) {
    const companyName = parentNode.querySelector(".company-name").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const location = parentNode.querySelector(".location").innerText;
    const type = parentNode.querySelector(".type").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const jobStatus = parentNode.querySelector(".job-status").innerText;
    const description = parentNode.querySelector(".description").innerText;
    const cardInfo = {
      companyName,
      position,
      location,
      type,
      salary,
      jobStatus,
      description,
    };
    if (
      !interviewList.find((item) => item.companyName == cardInfo.companyName)
    ) {
      interviewList.push(cardInfo);
    }
  }
});



calculate();
