var 利率信息 = {
    "職業1": {
        "汽車貸款": 3.5,
        "機車貸款": 5.0
    },
    "職業2": {
        "汽車貸款": 4.0,
        "機車貸款": 5.5
    },
    "職業3": {
        "汽車貸款": 4.5,
        "機車貸款": 6.0
    }
    // 添加更多的職業和對應的利率
};

var 職業選項 = document.getElementById("職業選項");
var 貸款類型選項 = document.getElementById("貸款類型選項");
var 顯示利率區域 = document.getElementById("顯示利率");

職業選項.addEventListener("change", 更新利率);
貸款類型選項.addEventListener("change", 更新利率);

function 更新利率() {
    var 選擇的職業 = 職業選項.value;
    var 選擇的貸款類型 = 貸款類型選項.value;
    var 利率 = 利率信息[選擇的職業][選擇的貸款類型];
    顯示利率區域.textContent = 利率 + "%";
}