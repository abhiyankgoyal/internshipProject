
/*function display(){
    var users = window.localStorage.getItem("users");
    console.log(JSON.parse(users));
}
window.onload = display;
*/
    function verify(){
        var users = JSON.parse(window.localStorage.getItem("users"));
        document.getElementById("err").innerHTML = "";
        var loginUserName = document.getElementById("Username").value;
        var loginPass = document.getElementById("Password").value;
        var count=0;
        for(let i = 0; i < users.length; i++){
            if(loginUserName == users[i].username && loginPass == users[i].pass){
                window.document.location = 'RegistrationForm.html';
                count++;
            }
        }
        if(count == 0){
            document.getElementById("err").innerHTML = "username or password is incorrect";
            return false;
        }
    }

