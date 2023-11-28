    // 定義showDiv函數
    function showDiv(divId) {
        // 先将所有div隐藏
        var divs = document.querySelectorAll('.content');
        for (var i = 0; i < divs.length; i++) {
          divs[i].style.display = 'none';
        }
      
        // 再显示被点击的div
        var divToShow = document.getElementById(divId);
        if (divToShow) {
          divToShow.style.display = 'block';
        }
      }
  
      // 在載入時呼叫showDiv函數，顯示div1
      window.onload = function() {
          showDiv('div1');
      };