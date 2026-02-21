// global variables
let interviewList = [];
let rejectedList = [];
const allItemsBtn = document.getElementById("all-items");
const interviewItemsBtn = document.getElementById("interview-items");
const rejectedItemsBtn = document.getElementById("rejected-items");
const availJobs = document.getElementById("available-jobs");
const interviewCardsContainer = document.getElementById("interview-cards");
const allCardsContainer = document.getElementById("all-cards-container")
const rejectedCardsContainer = document.getElementById('rejected-cards')

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
  const selected = document.getElementById(id)
  selected.classList.add("active-btn");

  if(selected.classList.contains('all-items')){
    console.log("all");
  }
  else if(selected.classList.contains('interview-items')){
    console.log("inter");
  }
  else if(selected.classList.contains('rejected-items')){
    console.log("re");
  }
  
}
function displayContent(id){
    console.log(id);
}

// calculate job status

function calculate() {
  availJobs.innerText = `${allCardsContainer.children.length} jobs`;
  document.getElementById("total-count").innerText = allCardsContainer.children.length;
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
      jobStatus: "Applied",
      description,
    };
    if (
      !interviewList.find((item) => item.companyName == cardInfo.companyName)
    ) {
      interviewList.push(cardInfo);
    }
    appendCardOnInterviewSection();
  }
});

function appendCardOnInterviewSection() {
  interviewCardsContainer.innerHTML = "";
  for (const item of interviewList) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="space-y-2 bg-white p-5 rounded-md demo-card">
          <div class="flex justify-between items-center">
            <h3 class="company-name text-[#002c5c] text-xl font-semibold">
              ${item.companyName}
            </h3>
            <i class="fa-solid fa-trash" id="delete-btn"></i>
          </div>
          <p class="position text-gray-500">${item.position}</p>
          <ul class="job-info text-gray-500 text-sm flex flex-col md:flex-row gap-1">
            <li class="location">${item.location}</li>
            <li class="type">${item.type}</li>
            <li class="salary">${item.salary}</li>
          </ul>
          <p class="job-status btn">${item.jobStatus}</p>
          <p class="description text-gray-700">
            ${item.description}
          </p>
          <div class="flex gap-10 btn-container">
            <button class="interview-btn btn btn-outline btn-success uppercase">
              interview</button
            ><button class="reject-btn btn btn-outline btn-error uppercase">
              Rejected
            </button>
          </div>
        </div>
    `;
    interviewCardsContainer.appendChild(div);
  }
}

calculate();
