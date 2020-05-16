
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
function registrationNo(regno) {
    console.log(regno);
    window.localStorage.setItem("regno", JSON.stringify(regno));
    document.location = 'admissionPage.html';
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

function deleteStudent(index) {
    var studentsJson = window.localStorage.getItem("admission");
    var admittedStudents = JSON.parse(studentsJson);
    if (confirm('Do You Want to delete record of student ' + admittedStudents[index].name + '?')) {
        admittedStudents.splice(index, 1);
        console.log(admittedStudents);
        window.localStorage.setItem("admission", JSON.stringify(admittedStudents));
        document.location = 'admissionList.html';
    }
    else {
        return;
    }
}

function addData() {
    var studentsJson = window.localStorage.getItem("admission");
    var admittedStudents = JSON.parse(studentsJson);
    console.log(admittedStudents);
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
        cell7.innerHTML = "<button class= 'btn' onclick=registrationNo(" + admittedStudents[i].registrationNo + ")>Modify</button>";
        cell8.innerHTML = "<button class='btn'>print</button>";
        cell9.innerHTML = "<button class='btn' onclick=deleteStudent(" + i + ")>Delete</button>";
    }
    console.log(admittedStudents.length)
    if (admittedStudents.length < 6) {
        document.getElementById("footer").style.color = "yellow";
        document.getElementById("footer").style.position = "fixed";
        document.getElementById("footer").style.width = "100%";
    }
    else {
        document.getElementById("footer").style.color = "red";
    }
    getUser();
}

