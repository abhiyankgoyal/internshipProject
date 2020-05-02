class User {

    constructor(name, username, email, pass) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.pass = pass;
    }

}

function validate() {

    var users = [];
    document.getElementById("duplicate").innerHTML = "";
    document.getElementById("userErr").innerHTML = "";

    if (window.localStorage.getItem("users") != null && window.localStorage.getItem("users").length > 0) {
        usersJson = window.localStorage.getItem("users");
        users = JSON.parse(usersJson);
    }

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
        let count = 0;
        for (let i = 0; i < users.length; i++) {

            if (user.email == users[i].email) {
                document.getElementById("duplicate").innerHTML = "account with this email already exists";
                count++;
            }
            if (user.username == users[i].username) {
                document.getElementById("userErr").innerHTML = "this username is not available";
                count++;
            }
        }
        if (count == 0) {
            users.push((user));
        }
        else {
            return false;
        }

        console.log(users);
        window.localStorage.setItem("users", JSON.stringify(users));
        alert('account created successfully');
        document.location = 'Login.html';
    }
    
}


