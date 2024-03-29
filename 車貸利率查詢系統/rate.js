const 利率信息={
    "裕融":"2-15.75",
    "和潤":"2-15.75",
    "中租":"2-15.75",
    "台新銀行":"2.99-6",
    "三信銀行":"3.08-12",
    "聯邦銀行":"2.88-9.5",
    "台中銀行":"3.5-16",
    "元大銀行":"4.15-11.38",
    "新光銀行":"2.88-12",
    "彰化銀行":"定儲指標利率＋6.05（浮動利率）",
};

const 期數信息={
    "裕融":"7",
    "和潤":"7",
    "中租":"7",
    "台新銀行":"5",
    "三信銀行":"7",
    "聯邦銀行":"4",
    "台中銀行":"7",
    "元大銀行":"5",
    "新光銀行":"7",
    "彰化銀行":"3",
};

const 額度信息={
    "裕融":"車價250%",
    "和潤":"車價250%",
    "中租":"車價250%",
    "台新銀行":"車價90%",
    "三信銀行":"200萬",
    "聯邦銀行":"車價90%",
    "台中銀行":"最高200萬",
    "元大銀行":"車價90%",
    "新光銀行":"1000萬",
    "彰化銀行":"車價70%",
};

const 推薦信息={
    "裕融":"★★★★★極推", 
    "和潤":"★★★★★極推",
    "中租":"★★★★★極推",
    "台新銀行":"★★★★☆優",
    "三信銀行":"★★★★☆優",
    "聯邦銀行":"★★★★☆優",
    "台中銀行":"★★★★☆優",
    "元大銀行":"★★★☆☆普通",
    "新光銀行":"★★☆☆☆不推",
    "彰化銀行":"★☆☆☆☆不推",
};

const 貸款機構選擇器 = document.getElementById("貸款機構");
const 顯示利率區域 = document.getElementById("顯示利率");
const 顯示期數區域 = document.getElementById("顯示期數");
const 顯示額度區域 = document.getElementById("顯示額度");
const 顯示推薦區域 = document.getElementById("顯示推薦");

貸款機構選擇器.addEventListener("change", 更新資訊);

function 更新資訊() {
    const 選擇的貸款機構 = 貸款機構選擇器.value;

    // 檢查選擇的貸款機構是否存在於利率信息中
    if (利率信息.hasOwnProperty(選擇的貸款機構)) {
        const 利率資訊 = 利率信息[選擇的貸款機構];
        顯示利率區域.textContent = 利率資訊 + "%";
    } else {
        顯示利率區域.textContent = "找不到該貸款機構的利率資訊";
    }

    // 檢查選擇的貸款機構是否存在於期數信息中
    if (期數信息.hasOwnProperty(選擇的貸款機構)) {
        const 期數資訊 = 期數信息[選擇的貸款機構];
        顯示期數區域.textContent =期數資訊 + "年";
    } else {
        顯示期數區域.textContent = "找不到該貸款機構的期數資訊";
    }

    // 檢查選擇的貸款機構是否存在於額度信息中
    if (額度信息.hasOwnProperty(選擇的貸款機構)) {
        const 額度資訊 = 額度信息[選擇的貸款機構];
        顯示額度區域.textContent = 額度資訊;
    } else {
        顯示額度區域.textContent = "找不到該貸款機構的額度資訊";
    }
    // 檢查選擇的貸款機構是否存在於推薦信息中
    if (推薦信息.hasOwnProperty(選擇的貸款機構)) {
        const 推薦資訊 = 推薦信息[選擇的貸款機構];
        顯示推薦區域.textContent = 推薦資訊;
    } else {
        顯示推薦區域.textContent = "找不到該貸款機構的推薦資訊";
    }
}