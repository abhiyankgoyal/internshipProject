
/*function display(){
    var users = window.localStorage.getItem("users");
    console.log(JSON.parse(users));
}
window.onload = display;
*/
function verify() {
    // var users = JSON.parse(window.localStorage.getItem("users"));
    // if (users == null) {
    //     document.getElementById("err").innerHTML = "username or password is incorrect";
    //     return false;
    // }
    document.getElementById("err").innerHTML = "";
    var loginUserName = document.getElementById("Username").value;
    var loginPass = document.getElementById("Password").value;
    // var count = 0;
    // for (let i = 0; i < users.length; i++) {
    //     if (loginUserName == users[i].username && loginPass == users[i].pass) {
    //         window.sessionStorage.setItem("user", JSON.stringify(users[i]));
    //         window.document.location = 'RegistrationForm.html';
    //         count++;
    //     }
    // }
    // if (count == 0) {
    //     document.getElementById("err").innerHTML = "username or password is incorrect";
    //     return false;
    // }

    var xmlhttp;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            console.log(res);
            if(res == 0){
                document.getElementById("err").innerHTML = "username or password is incorrect";
            }
            else{
                document.location = 'registrationForm.html';
            }
        }
    };
    xmlhttp.open("POST", "login.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("loginUserName="+JSON.stringify(loginUserName)+"&loginPassword="+JSON.stringify(loginPass));
}