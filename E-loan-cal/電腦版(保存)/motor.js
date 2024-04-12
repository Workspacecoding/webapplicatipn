
function calculateAmortization() {
    // 取得使用者輸入的值
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTerm = parseInt(document.getElementById('loanTerm').value);

    // 計算每期的本金攤還額
    const monthlyInterestRate = interestRate / 100 / 12;
    const monthlyPayment =  (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));

    // 初始化表格
    const tableBody = document.getElementById('amortizationTableBody');
    tableBody.innerHTML = '';

    let remainingBalance = loanAmount;

    // 計算每期的攤還情況
    for (let period = 1; period <= loanTerm; period++) {
        const interestPayment = remainingBalance * monthlyInterestRate;
        const principalPayment = monthlyPayment - interestPayment;
        remainingBalance -= principalPayment;

        // 創建表格行並插入表格
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = period;
        row.insertCell(1).innerText = "$" + Math.ceil(principalPayment.toFixed(2)).toLocaleString();
        row.insertCell(2).innerText = "$" +Math.ceil(interestPayment.toFixed(2)).toLocaleString();
        row.insertCell(3).innerText = "$"+Math.ceil(monthlyPayment.toFixed(2)).toLocaleString();
        row.insertCell(4).innerText = "$"+Math.ceil(remainingBalance.toFixed(2)).toLocaleString();
    }
}

function clearLabel() {
    document.getElementById("loanAmount").value= "";
    document.getElementById("interestRate").value = "";
    document.getElementById("loanTerm").value = "";
}

function changeBorderColor() {
    document.getElementById("loanAmount").style.borderColor = "red"; // 改變邊框顏色為紅色
}
