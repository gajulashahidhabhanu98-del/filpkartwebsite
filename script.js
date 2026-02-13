const phoneInput = document.getElementById("phone");

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {

    let phone = phoneInput.value.trim();

    if (phone === "") {

        alert("Please enter phone number");

        return;

    }

    if (phone.length !== 10 || isNaN(phone)) {

        alert("Enter valid 10 digit phone number");

        return;

    }

    alert("OTP Sent to +91 " + phone);

});
 
