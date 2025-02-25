document.getElementById("add-money").addEventListener("click", function (e) {
    e.preventDefault()
    const amount = document.getElementById("amound").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin)
    const mainBlance = document.getElementById("main-blance").innerText;
    const convertedMainBlance = parseFloat(mainBlance);
    console.log(convertedMainBlance);

    if (convertedPin === 1234) {
        if (convertedMainBlance + convertedAmount <= 25000) {
            const sum = convertedMainBlance + convertedAmount;
            document.getElementById("main-blance").innerText = sum;
            alert("Money Added")
        }
        else {
            alert("Your Account Stor Full")
        }
    } else {
        alert("Your Pin Is Incorrect")
    }

})