// Select People
const peopleSum = document.querySelector("#people-sum");


// Increment By One
const plusSum = document.querySelector("#plus-sum");
let count = 1;
plusSum.addEventListener("click", () => {
    count++;
    peopleSum.innerHTML = count;
});


// Decrement By One
const minusSum = document.querySelector("#minus-sum");
minusSum.addEventListener("click", () => {
    if (count > 1) {
        count--;
    }
    peopleSum.innerHTML = count;
});


// Calculate
const calculator = document.querySelector("#calculator");

calculator.addEventListener("click", () => {

    // Display Summary Tab
    document.querySelector(".total-person").style.display = "block";

    // Calculating Tips
    const totalBill = Number(document.querySelector("#total-bill").value);
    const tipMain = Number(document.querySelector("#total-tip").value);

    let total = totalBill * (tipMain / 100);
    let finalPeople = peopleSum.innerHTML;


    // Display Total Bill and Total in Summary Tab
    document.querySelector("#final-bill").innerHTML = totalBill;
    document.querySelector("#tip-amount").innerHTML = total;

    const taxAmount = (document.querySelector("#tax-amount").innerHTML = (totalBill + 5) / 100);

    // Final Calculation
    document.querySelector("#total-pp").innerHTML = ((totalBill + total + taxAmount) / finalPeople).toFixed(2);
});