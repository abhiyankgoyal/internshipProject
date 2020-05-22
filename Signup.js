class User {

    constructor(name, username, email, pass) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.pass = pass;
    }

}

function validate() {

    //var users = [];
    document.getElementById("duplicate").innerHTML = "";
    document.getElementById("userErr").innerHTML = "";

    // if (window.localStorage.getItem("users") != null && window.localStorage.getItem("users").length > 0) {
    //     usersJson = window.localStorage.getItem("users");
    //     users = JSON.parse(usersJson);
    // }

    var name = document.getElementById("name").value;
    var userName = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var rePass = document.getElementById("retype-password").value;

    if (pass != rePass) {
        // console.log("password do not match");
        document.getElementById("password").value = "";
        document.getElementById("retype-password").value = "";
        document.getElementById("message").innerHTML = "passwords do not match";
    }
    else {
        document.getElementById("message").innerHTML = "";
        var user = new User(name, userName, email, pass);
        // let count = 0;
        // for (let i = 0; i < users.length; i++) {

        //     if (user.email == users[i].email) {
        //         document.getElementById("duplicate").innerHTML = "account with this email already exists";
        //         count++;
        //     }
        //     if (user.username == users[i].username) {
        //         document.getElementById("userErr").innerHTML = "this username is not available";
        //         count++;
        //     }
        // }
        // if (count == 0) {
        //     users.push((user));
        // }
        // else {
        //     return false;
        // }
        //console.log(users);
        console.log(user);
        //window.localStorage.setItem("users", JSON.stringify(users));
        var userStr = JSON.stringify(user);
        console.log(userStr);
        // php call
        var xmlhttp;
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var res = this.responseText;
                console.log(res);
                if (res == 0) {
                    document.getElementById("userErr").innerHTML = "this username is not available";
                }
                else if (res == 1) {
                    document.getElementById("duplicate").innerHTML = "account with this email already exists";
                }
                else if (res == 2) {
                    document.getElementById("userErr").innerHTML = "this username is not available";
                    document.getElementById("duplicate").innerHTML = "account with this email already exists";
                }
                else if (res == 3) {
                    alert('account created successfully');
                    document.location = 'Login.html';
                }
                else {
                    alert(res);
                    return;
                }

            }
        };
        //xmlhttp.open("GET", "Signup.php?user="+ JSON.stringify(user), true);
        //xmlhttp.send();
        xmlhttp.open("POST", "Signup.php", true);
        // xmlhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(`user=${userStr}`);

        // done
        //alert('account created successfully');
        // document.location = 'Login.html';
    }

}