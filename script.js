document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
 
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("msg");
 
    // Dummy login validation
    if(user === "admin" && pass === "12345") {
        msg.style.color = "green";
        msg.innerHTML = "Login Successful ✅";
    }
    else {
        msg.style.color = "red";
        msg.innerHTML = "Invalid Username or Password ❌";
    }
});
