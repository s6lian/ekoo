function login() {

    var username = document.getElementById("username");
    var pass = document.getElementById("password");

    if (username.value == "") {

        alert("Please input your username");

    } else if (pass.value  == "") {

        alert("Please input your password");

    } else if(username.value == "admin" && pass.value == "123456"){

        window.location.href="Log.html";

    } else {

        alert("Please input the right username or password")

    }
}
