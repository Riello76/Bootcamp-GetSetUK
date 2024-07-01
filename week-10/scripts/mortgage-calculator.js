function calculateMortgage() {
  const principal = document.getElementById("principal").value;
  const interestRate = document.getElementById("interestRate").value / 100 / 12;
  const loanTerm = document.getElementById("loanTerm").value * 12;

  const mortgagePayment =
    (principal * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
  //   convert this formula: (1 + r) n-1
  //   into inverse formula: (1-(1+r)-n)

  const result = document.getElementById("result");
  result.innerHTML = `Monthly Mortgage Payment: £${mortgagePayment.toFixed(2)}`;
}

const myArray = [];
const _hidden_Array = [];
const $hiddenArray = [];