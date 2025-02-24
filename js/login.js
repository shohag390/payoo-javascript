document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById("account-number").value;
    const accountPin = document.getElementById("account-pin").value;
    console.log(accountPin);

    if (accountNumber.length === 11) {
        if (parseInt(accountPin) === 1234) {
            window.location.href = "./home.html"
        } else {
            alert("Incurred pin ")
        }
    } else {
        alert("Invalid Number")
    }
})