const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//Selecting DOM elements
const btn_open = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Create DOM elements: Render facts in list
factsList.innerHTML = "";

//Load data from Supabase
loadFacts();

async function loadFacts(params) {
  const res = await fetch(
    "https://hotsyvamnptnayhthhdq.supabase.co/rest/v1/Facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvdHN5dmFtbnB0bmF5aHRoaGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwOTYyMzUsImV4cCI6MjA1MzY3MjIzNX0.wNBk_A6cbeGU1JfE9LctZhCh2jQ7Br8cdSMoZ5_vRJo",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvdHN5dmFtbnB0bmF5aHRoaGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwOTYyMzUsImV4cCI6MjA1MzY3MjIzNX0.wNBk_A6cbeGU1JfE9LctZhCh2jQ7Br8cdSMoZ5_vRJo",
      },
    }
  );

  const data = await res.json();
  //console.log(data);
  //const filterData = data.filter((fact) => fact.category === "society");

  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
              <p>
                ${fact.text}
                <a
                  class="source"
                  href="${fact.source}"
                  target="_blank"
                  >(Source)</a>
              </p>
              <span class="tag" style="background-color: ${
                CATEGORIES.find((cat) => cat.name === fact.category).color
              }"
                >${fact.category}</span>
                </li>`
  );

  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//Toggle form visibility
btn_open.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn_open.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn_open.textContent = "Share a fact";
  }
});

console.log([1, 62, -55, 11].filter((el) => el < 10));

console.log([1, 62, -55, 11].find((el) => el > 10));

/*

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const factAges = initialFacts.map(
  (el) => new Date().getFullYear() - el.createdIn
);
console.log(factAges);
console.log("missed");

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  return age;
}

console.log(calcFactAge(2009));

const factAges1 = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges1);
*/
