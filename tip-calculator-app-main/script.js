const fivePercent = document.getElementById("percent-5");
const tenPercent = document.getElementById("percent-10");
const fifteenPercent = document.getElementById("percent-15");
const twentyPercent = document.getElementById("percent-20");
const twentyFivePercent = document.getElementById("percent-25");
const fiftyPercent = document.getElementById("percent-50");
const customPercent = document.getElementById("percent-custom");

const totalBill = document.getElementById("totalBill");
const numPeople = document.getElementById("numPeople");
const reset = document.getElementById("reset");
let tipAmount = 0.15;
let total = 0.0;

let totalPerPerson = 0.0;

function calculateTotals(tipAmount) {
  let bill = parseFloat(totalBill.value);
  let people = parseFloat(numPeople.value);
  let tip = tipAmount;
  document.getElementById("tip_total").innerText = `${(
    (bill * tip) /
    people
  ).toFixed(2)}`;
  document.getElementById("total_per_person").textContent = `${(
    (bill * tip + bill) /
    people
  ).toFixed(2)}`;
}

fivePercent.addEventListener("click", () => {
  tipAmount = 0.05;
  calculateTotals(tipAmount);
});

tenPercent.addEventListener("click", () => {
  tipAmount = 0.1;
  calculateTotals(tipAmount);
});

fifteenPercent.addEventListener("click", () => {
  tipAmount = 0.15;
  calculateTotals(tipAmount);
});

twentyFivePercent.addEventListener("click", () => {
  tipAmount = 0.25;
  calculateTotals(tipAmount);
});

fiftyPercent.addEventListener("click", () => {
  tipAmount = 0.5;
  calculateTotals(tipAmount);
});

customPercent.addEventListener("click", () => {
  customTip = prompt(
    "Enter a custom tip percentage. Example: 0.25 is 25 percent."
  );
  tipAmount = parseFloat(customTip);
  calculateTotals(tipAmount);
});

reset.addEventListener("click", () => {
  document.getElementById("totalBill").value = "";
  document.getElementById("tip_total").innerText = "";
  document.getElementById("numPeople").value = "";
  document.getElementById("total_per_person").textContent = "";
});
