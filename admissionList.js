
window.onload = getUser;

function getUser() {
    //user = JSON.parse(window.sessionStorage.getItem("user"));
    //document.getElementById("user").innerHTML = "Welcome " + user.name;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            document.getElementById("user").innerHTML = "Welcome " + res;
        }
    }
    xmlhttp.open("GET", "sessionLogin.php", true);
    xmlhttp.send();
    addData();
}
function registrationNo(regno, name) {
    console.log(regno, name);
    var count = JSON.parse(window.localStorage.getItem("count"));
    count = 1;
    window.localStorage.setItem("count", JSON.stringify(count));
    console.log(regno);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            console.log(res);
            document.location = 'admissionPage.html';
        }
    }
    xmlhttp.open("GET", "getRegistrationNo.php?regno=" + JSON.stringify(regno) + "&studentName=" + name, false);
    xmlhttp.send();
    //window.localStorage.setItem("regno", JSON.stringify(regno));
    //document.location = 'admissionPage.html';

}

function logout() {
    //window.sessionStorage.removeItem("user");
    //document.location = 'Login.html';
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            if (res == 0 || res == 1) {
                document.location = 'Login.html';
            }
        }
    }
    xmlhttp.open("GET", "sessionLogout.php", true);
    xmlhttp.send();
}

function deleteStudent(regno, name) {
    // var studentsJson = window.localStorage.getItem("admission");
    // var admittedStudents = JSON.parse(studentsJson);
    // if (confirm('Do You Want to delete record of student ' + admittedStudents[index].name + '?')) {
    //     admittedStudents.splice(index, 1);
    //     console.log(admittedStudents);
    //     window.localStorage.setItem("admission", JSON.stringify(admittedStudents));
    //     document.location = 'admissionList.html';
    // }
    // else {
    //     return;
    // }
    console.log(`${regno} ${name}`);
    if (confirm('Do You Want to delete record of student ' + name + '?')) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var res = this.responseText;
                if (res == 1) {
                    document.location = 'admissionList.html';
                }
                else{
                    alert(res);
                }
            }
        }
        // xmlhttp.open("GET", "deleteAdmittedStudent.php?regno=" + JSON.stringify(regno), true);
        // xmlhttp.send();
        xmlhttp.open("POST", "deleteAdmittedStudent.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(`regno=${JSON.stringify(regno)}`);
    }
}

function addData() {
    // var studentsJson = window.localStorage.getItem("admission");
    // var admittedStudents = JSON.parse(studentsJson);
    // console.log(admittedStudents);
    // var tableStudent = document.getElementById("student_table");
    // for (let i = 0; i < admittedStudents.length; i++) {
    //     var r = tableStudent.insertRow();
    //     var cell1 = r.insertCell();
    //     var cell2 = r.insertCell();
    //     var cell3 = r.insertCell();
    //     var cell4 = r.insertCell();
    //     var cell5 = r.insertCell();
    //     var cell6 = r.insertCell();
    //     var cell7 = r.insertCell();
    //     var cell8 = r.insertCell();
    //     var cell9 = r.insertCell();
    //     cell1.innerHTML = i + 1;
    //     cell2.innerHTML = admittedStudents[i].name;
    //     cell3.innerHTML = admittedStudents[i].fatherName;
    //     cell4.innerHTML = admittedStudents[i].division;
    //     cell5.innerHTML = admittedStudents[i].fatherContactNo;
    //     cell6.innerHTML = admittedStudents[i].admissionDate;
    //     cell7.innerHTML = "<button class= 'btn' onclick=registrationNo(" + admittedStudents[i].registrationNo + ")>Modify</button>";
    //     cell8.innerHTML = "<button class='btn'>print</button>";
    //     cell9.innerHTML = "<button class='btn' onclick=deleteStudent(" + i + ")>Delete</button>";
    // }
    // console.log(admittedStudents.length)
    // if (admittedStudents.length < 6) {
    //     document.getElementById("footer").style.color = "yellow";
    //     document.getElementById("footer").style.position = "fixed";
    //     document.getElementById("footer").style.width = "100%";
    // }
    // else {
    //     document.getElementById("footer").style.color = "red";
    // }

    var aStudents;
    var admittedStudents;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            aStudents = this.responseText;
            if (aStudents == undefined || aStudents == "") {
                aStudents = [];
                admittedStudents = [];
            }
            else {
                admittedStudents = JSON.parse(aStudents);
                console.log("admittedStudents", admittedStudents);
            }
        }
    }
    xmlhttp.open("GET", "admissionList.php", false);
    xmlhttp.send();
    //var studentsJson = window.localStorage.getItem("students");
    //var students = JSON.parse(studentsJson);
    //var admissionStudents = JSON.parse(window.localStorage.getItem("admission"));
    //console.log(students);
    var tableStudent = document.getElementById("student_table");
    for (let i = 0; i < admittedStudents.length; i++) {
        var r = tableStudent.insertRow();
        var cell1 = r.insertCell();
        var cell2 = r.insertCell();
        var cell3 = r.insertCell();
        var cell4 = r.insertCell();
        var cell5 = r.insertCell();
        var cell6 = r.insertCell();
        var cell7 = r.insertCell();
        var cell8 = r.insertCell();
        var cell9 = r.insertCell();
        cell1.innerHTML = i + 1;
        cell2.innerHTML = admittedStudents[i].name;
        cell3.innerHTML = admittedStudents[i].fatherName;
        cell4.innerHTML = admittedStudents[i].division;
        cell5.innerHTML = admittedStudents[i].fatherContactNo;
        cell6.innerHTML = admittedStudents[i].admissionDate;
        cell7.innerHTML = "<button class= 'btn' onclick='registrationNo(" + admittedStudents[i].registrationNo + "," + JSON.stringify(admittedStudents[i].name) + ")'>Modify</button>";
        cell8.innerHTML = "<button class='btn'>print</button>";
        cell9.innerHTML = `<button class='btn' onclick="deleteStudent(${admittedStudents[i].registrationNo},'${admittedStudents[i].name}')">Delete</button>`;
    }

    if (admittedStudents.length < 6) {
        //document.getElementsByClassName("footer").style = '#footer{position: fixed;bottom: 0;width: 100%;background-color:#3c3c3c;padding : 2px;color: #ffffff;text-align:center;font-size: small}';
        document.getElementById("footer").style.color = "yellow";
        document.getElementById("footer").style.position = "fixed";
        document.getElementById("footer").style.width = "100%";
    }
    else {
        document.getElementById("footer").style.color = "red";
    }
}

