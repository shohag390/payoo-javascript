document.getElementById("withdraw-money").addEventListener("click", function (e) {
    e.preventDefault()
    const amoundMoney = document.getElementById("amound-money").value;
    const convertedAmount = parseFloat(amoundMoney);
    const pin = document.getElementById("your-pin").value;
    const convertedPin = parseInt(pin)
    const mainBlance = document.getElementById("main-blance").innerText;
    const convertedMainBlance = parseFloat(mainBlance);

    if (convertedPin === 1234) {
        if (convertedMainBlance >= convertedAmount) {
            const result = convertedMainBlance - convertedAmount;
            document.getElementById("main-blance").innerText = result;
            alert("Cash Out Success")
        } else {
            alert("insufficient balance")
        }

    } else {
        alert("Your Pin Is Incorrect")
    }
})