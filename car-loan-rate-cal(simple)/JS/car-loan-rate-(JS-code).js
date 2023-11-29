document.getElementById('countID').addEventListener('click', function() {
    var interestRate = parseInt(document.getElementById('rateID').value);
    var moneyNum = parseInt(document.getElementById('moneyID').value);
    var monthNum = parseInt(document.getElementById('monthID').value);

    var monthlyInterestRate = interestRate / 1200;
    var monthlyPayment = (moneyNum * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, monthNum)) / (Math.pow(1 + monthlyInterestRate, monthNum) - 1);
    var totalInterest = monthlyPayment * monthNum - moneyNum;
    var totalAmount = monthlyPayment * monthNum;

    document.getElementById('monthlyPaymentID').textContent = monthlyPayment.toFixed(0);
    document.getElementById('allrateID').textContent = totalInterest.toFixed(0);
    document.getElementById('allmoneyID').textContent = totalAmount.toFixed(0);
});