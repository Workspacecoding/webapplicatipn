function calculateInterestRate() {
    var loanAmount = parseFloat(document.getElementById("loanAmount").value);
    var loanTerm = parseFloat(document.getElementById("loanTerm").value);
    var monthlyPayment = parseFloat(document.getElementById("monthlyPayment").value);

    var tolerance = 0.00001;
    var lowerRate = 0.001;
    var upperRate = 100;
    var rate = 5; // 初始利率的百分比，可以根据需要进行调整

    while (upperRate - lowerRate > tolerance) {
      var balance = loanAmount;
      for (var i = 0; i < loanTerm; i++) {
        balance -= monthlyPayment - (balance * rate / 12 / 100);
      }

      if (balance > 0) {
        upperRate = rate;
      } else {
        lowerRate = rate;
      }

      rate = (upperRate + lowerRate) / 2;
    }

    var interestRate = rate.toFixed(2);
    document.getElementById("result").innerText = "计算得到的利率为: " + interestRate + "%";
  }