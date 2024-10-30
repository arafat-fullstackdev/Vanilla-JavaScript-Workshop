//!----------- Monthly Expense --------//
const incomeMonth = 3000;

let rent = 1200;
let groceries = 600;
let utilities = 300;
let entertainment = 200;

let totalExpense = rent + groceries + utilities + entertainment ;
console.log(totalExpense);

let savingsMonthly = incomeMonth - totalExpense;
console.log(savingsMonthly)

let perchantageMonthlyExp  = (totalExpense / incomeMonth) * 100;
console.log(perchantageMonthlyExp);

