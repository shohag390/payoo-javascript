document.getElementById("bonus-money").addEventListener("click", function (event) {
    event.preventDefault();
    const mainBlance = document.getElementById("main-blance").innerText;
    const convertedMainBlance = parseFloat(mainBlance);
    const coupon = document.getElementById("coupon").value;
    const convertedCoupon = parseFloat(coupon);


    if (convertedCoupon === 39047) {
        const sum = convertedMainBlance + 100;
        document.getElementById("main-blance").innerText = sum;
        alert("Your Bonus Money Added")
    } else {
        alert("Wrong Coupon Node.")
    }
})