var slider1 = document.getElementById("a"); // 使用不同的變數名稱 slider1
var display1 = document.getElementById("loanAmountDisplay"); // 使用不同的變數名稱 display1

var slider2 = document.getElementById("x"); // 使用不同的變數名稱 slider2
var display2 = document.getElementById("loanAmountDisplay2"); // 使用不同的變數名稱 display2

// 設置初始顯示值
display1.textContent = slider1.value;
display2.textContent = slider2.value;

// 添加事件監聽器，當滑塊值改變時更新顯示元素的文本內容
slider1.addEventListener("input", function() {
    var updatedValue = Math.ceil(slider1.value);
    display1.textContent = "NT$" + updatedValue;
});

slider2.addEventListener("input", function() {
    var updatedValue = Math.ceil(slider2.value);
    display2.textContent = "NT$" + updatedValue;
});