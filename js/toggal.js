document.getElementById("cash-out").style.display = "none";
document.getElementById("money-transfer").style.display = "none";
document.getElementById("get-bonus").style.display = "none";
document.getElementById("pay-bill").style.display = "none";
document.getElementById("transaction").style.display = "none";


document.getElementById("add").addEventListener("click", function () {
    document.getElementById("money-add").style.display = "block";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("money-transfer").style.display = "none";
    document.getElementById("get-bonus").style.display = "none";
    document.getElementById("pay-bill").style.display = "none";
    document.getElementById("transaction").style.display = "none";
})
document.getElementById("cash").addEventListener("click", function () {
    document.getElementById("money-add").style.display = "none";
    document.getElementById("cash-out").style.display = "block";
    document.getElementById("money-transfer").style.display = "none";
    document.getElementById("get-bonus").style.display = "none";
    document.getElementById("pay-bill").style.display = "none";
    document.getElementById("transaction").style.display = "none";
})
document.getElementById("transfer").addEventListener("click", function () {
    document.getElementById("money-add").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("money-transfer").style.display = "block";
    document.getElementById("get-bonus").style.display = "none";
    document.getElementById("pay-bill").style.display = "none";
    document.getElementById("transaction").style.display = "none";

})
document.getElementById("bonus").addEventListener("click", function () {
    document.getElementById("money-add").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("money-transfer").style.display = "none";
    document.getElementById("get-bonus").style.display = "block";
    document.getElementById("pay-bill").style.display = "none";
    document.getElementById("transaction").style.display = "none";
})
document.getElementById("pay").addEventListener("click", function () {
    document.getElementById("money-add").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("money-transfer").style.display = "none";
    document.getElementById("get-bonus").style.display = "none";
    document.getElementById("pay-bill").style.display = "block";
    document.getElementById("transaction").style.display = "none";
})
document.getElementById("all-transaction").addEventListener("click", function () {
    document.getElementById("money-add").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("money-transfer").style.display = "none";
    document.getElementById("get-bonus").style.display = "none";
    document.getElementById("pay-bill").style.display = "none";
    document.getElementById("transaction").style.display = "block";
})


document.getElementById("log-out").addEventListener("click", function () {
    window.location.href = "./index.html"
})