// global variables
let interviewList = [];
let rejectedList = [];
const allItemsBtn = document.getElementById("all-items");
const interviewItemsBtn = document.getElementById("interview-items");
const rejectedItemsBtn = document.getElementById("rejected-items");
const availJobs = document.getElementById("available-jobs");
const allCardsContainer = document.getElementById("all-cards-container");
const interviewCardsContainer = document.getElementById("interview-cards");
const rejectedCardsContainer = document.getElementById("rejected-cards");
let currentStatus = 'all-items'

function display(id) {
    currentStatus = id
  // remove active class
  allItemsBtn.classList.remove("active-btn");
  interviewItemsBtn.classList.remove("active-btn");
  rejectedItemsBtn.classList.remove("active-btn");
  // add common class
  allItemsBtn.classList.add("common-btn");
  interviewItemsBtn.classList.add("common-btn");
  rejectedItemsBtn.classList.add("common-btn");
  // add active class on clicked btn
  const selected = document.getElementById(id);
  selected.classList.add("active-btn");

  if (selected.classList.contains("all-items")) {
    interviewCardsContainer.classList.add("hidden");
    rejectedCardsContainer.classList.add("hidden");
    allCardsContainer.classList.remove("hidden");
  } else if (selected.classList.contains("interview-items")) {
    allCardsContainer.classList.add("hidden");
    rejectedCardsContainer.classList.add("hidden");
    interviewCardsContainer.classList.remove("hidden");
  } else if (selected.classList.contains("rejected-items")) {
    allCardsContainer.classList.add("hidden");
    interviewCardsContainer.classList.add("hidden");
    rejectedCardsContainer.classList.remove("hidden");
  }
  calculate()
}
function displayContent(id) {
  console.log(id);
}

// calculate job status

function calculate() {
  const total = allCardsContainer.children.length
  const interviewCount = interviewList.length
  const rejectedCount = rejectedList.length
  document.getElementById('total-count').innerText = total
  document.getElementById('interview-count').innerText = interviewCount
  document.getElementById('rejected-count').innerText = rejectedCount

  if(currentStatus == "all-items"){
    availJobs.innerText = `${total} jobs`
  }
  if(currentStatus == "interview-items"){
    availJobs.innerText = `${interviewCount} out of ${total}`
  }
  if(currentStatus == "rejected-items"){
    availJobs.innerText = `${rejectedCount} out of ${total}`
  }
}

// main function
document.querySelector("main").addEventListener("click", function (event) {
  const parentNode = event.target.parentNode.parentNode;
  if (event.target.classList.contains("fa-trash")) {
    allCardsContainer.removeChild(parentNode);
    calculate()
  }

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
      jobStatus: "Interview",
      description,
    };
    if (
      !interviewList.find((item) => item.companyName == cardInfo.companyName)
    ) {
      interviewList.push(cardInfo);
    }
    parentNode.querySelector(".job-status").innerText = "Interview";
    rejectedList = rejectedList.filter(item=>item.companyName != cardInfo.companyName)
    if(currentStatus == "rejected-items"){
        appendCardOnRejectedSection()
    }
    calculate();
    appendCardOnInterviewSection();
  }

  //   rejected button functionality
  else if (event.target.classList.contains("reject-btn")) {
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
      jobStatus: "Rejected",
      description,
    };
    if (
      !rejectedList.find((item) => item.companyName == cardInfo.companyName)
    ) {
      rejectedList.push(cardInfo);
    }
    parentNode.querySelector(".job-status").innerText = "Rejected";
    interviewList = interviewList.filter(item=>item.companyName != cardInfo.companyName)
    if(currentStatus == "interview-items"){
        appendCardOnInterviewSection()
    }
    calculate();
    appendCardOnRejectedSection();
  }
});
appendCardOnInterviewSection();
appendCardOnRejectedSection();

function appendCardOnInterviewSection() {
  interviewCardsContainer.innerHTML = "";
  if (!interviewList.length) {
    interviewCardsContainer.innerHTML = `
        <div class="flex flex-col justify-center items-center gap-2 py-18 bg-white rounded-lg">
            <img src="assets/document.png" alt="">
            <h2 class="text-2xl font-semibold">No jobs available</h2>
            <p class="text-gray-400">Check back soon for new job opportunities</p>
        </div>
    `;
  }
  for (const item of interviewList) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="space-y-2 bg-white p-5 rounded-md demo-card">
          <div class="flex justify-between items-center">
            <h3 class="company-name text-[#002c5c] text-xl font-semibold">
              ${item.companyName}
            </h3>
            <i class="fa-solid fa-trash"></i>
          </div>
          <p class="position text-gray-500">${item.position}</p>
          <ul class="job-info text-gray-500 text-sm flex flex-col md:flex-row gap-1">
            <li class="location">${item.location}</li>
            <li class="type">${item.type}</li>
            <li class="salary">${item.salary}</li>
          </ul>
          <p class="job-status btn ">${item.jobStatus}</p>
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

function appendCardOnRejectedSection() {
  rejectedCardsContainer.innerHTML = "";
  if (!rejectedList.length) {
    rejectedCardsContainer.innerHTML = `
        <div class="flex flex-col justify-center items-center gap-2 py-18 bg-white rounded-lg">
            <img src="assets/document.png" alt="">
            <h2 class="text-2xl font-semibold">No jobs available</h2>
            <p class="text-gray-400">Check back soon for new job opportunities</p>
        </div>
    `;
  }
  for (const item of rejectedList) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="space-y-2 bg-white p-5 rounded-md demo-card">
          <div class="flex justify-between items-center">
            <h3 class="company-name text-[#002c5c] text-xl font-semibold">
              ${item.companyName}
            </h3>
            <i class="fa-solid fa-trash"></i>
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
    rejectedCardsContainer.appendChild(div);
  }
}

calculate();
