   // 获取滑块元素和显示元素
   var slider = document.getElementById("x");
   var display = document.getElementById("loanAmountDisplay");
   
   // 设置初始显示值
   display.textContent = slider.value;
   
   // 添加事件监听器，当滑块值改变时更新显示元素的文本内容
   slider.addEventListener("input", function() {
       var updatedValue = Math.ceil(slider.value);
       display.textContent = "NT$" + updatedValue;
   });