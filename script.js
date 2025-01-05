function calculateFinancialForecast() {
    // 取得用戶輸入的值
    const currentSavings = parseFloat(document.getElementById("currentSavings").value);
    const currentIncome = parseFloat(document.getElementById("currentIncome").value);
    const savingsGrowthRate = parseFloat(document.getElementById("savingsGrowthRate").value) / 100;
    const incomeGrowthRate = parseFloat(document.getElementById("incomeGrowthRate").value) / 100;
    const years = parseInt(document.getElementById("years").value);

    // 檢查是否有未填寫的欄位
    if (isNaN(currentSavings) || isNaN(currentIncome) || isNaN(savingsGrowthRate) || isNaN(incomeGrowthRate) || isNaN(years)) {
        alert("請填寫所有欄位！");
        return;
    }

    // 計算未來儲蓄金額
    let futureSavings = currentSavings * Math.pow((1 + savingsGrowthRate), years);

    // 計算未來年收入
    let futureIncome = currentIncome * Math.pow((1 + incomeGrowthRate), years);

    // 顯示計算結果
    document.getElementById("futureSavings").textContent = futureSavings.toFixed(2);
    document.getElementById("futureIncome").textContent = futureIncome.toFixed(2);
}
