
window.onload = getUser;

function getUser() {
    //user = JSON.parse(window.sessionStorage.getItem("user"));
    //document.getElementById("user").innerHTML = "Welcome " + user.name;
    var xmlhttp = new XMLHttpRequest();
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
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            
        }
    }
    xmlhttp.open("GET", "registrationPage.php?regno=" + JSON.stringify(regno), true);
    xmlhttp.send();
    //window.localStorage.setItem("regno", JSON.stringify(regno));
    //document.location = 'registrationFormUpdate.html';
}

function logout() {
    //window.sessionStorage.removeItem("user");
    //document.location = 'Login.html';
    var xmlhttp = new XMLHttpRequest();
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
    var studentsJson = window.localStorage.getItem("students");
    var students = JSON.parse(studentsJson);
    if (confirm('Do You Want to delete record of student ' + students[index].name + '?')) {
        students.splice(index, 1);
        console.log(students);
        window.localStorage.setItem("students", JSON.stringify(students));
        document.location = 'registrationlist.html';
    }
    else {
        return;
    }
}

function makeAdmission(regno) {
    console.log(regno);
    window.localStorage.setItem("regno", JSON.stringify(regno));
    document.location = 'admissionPage.html';
}

function addData() {
    var rStudents;
    var aStudents;
    var registeredStudents;
    var admittedStudents;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            rStudents = this.responseText;
            registeredStudents = JSON.parse(rStudents);
            console.log("registeredStudents", registeredStudents);
        }
    }
    xmlhttp.open("GET", "registrationList.php", false);
    xmlhttp.send();

    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function () {
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
    xmlhttp2.open("GET", "registrationList2.php", false);
    xmlhttp2.send();
    //var studentsJson = window.localStorage.getItem("students");
    //var students = JSON.parse(studentsJson);
    //var admissionStudents = JSON.parse(window.localStorage.getItem("admission"));
    //console.log(students);
    var tableStudent = document.getElementById("student_table");
    for (let i = 0; i < registeredStudents.length; i++) {
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
        var cell10 = r.insertCell();
        cell1.innerHTML = i + 1;
        cell2.innerHTML = registeredStudents[i].name;
        cell3.innerHTML = registeredStudents[i].fatherName;
        cell4.innerHTML = registeredStudents[i].division;
        cell5.innerHTML = registeredStudents[i].fatherContactNo;
        cell6.innerHTML = registeredStudents[i].admissionDate;
        cell7.innerHTML = "<button class= 'btn' onclick=registrationNo(" + registeredStudents[i].registrationNo + ")>Modify</button>";
        if (admittedStudents.length == 0) {
            cell8.innerHTML = "<button class='btn' onclick=makeAdmission(" + registeredStudents[i].registrationNo + ")>Make Admission</button>";
        }
        else {
            let count = 0;
            for (let j = 0; j < admittedStudents.length; j++) {
                if (registeredStudents[i].registrationNo == admittedStudents[j].registrationNo) {
                    cell8.innerHTML = "<button type='button' title='already admitted' class='disabledBtn' onclick=makeAdmission(" + registeredStudents[i].registrationNo + ") disabled>Make Admission</button>";
                    count++;
                    break;
                }
            }
            if (count == 0) {
                cell8.innerHTML = "<button class='btn' onclick=makeAdmission(" + registeredStudents[i].registrationNo + ")>Make Admission</button>";
            }

        }
        cell9.innerHTML = "<button class='btn'>print</button>";
        cell10.innerHTML = "<button class='btn' onclick=deleteStudent(" + i + ")>Delete</button>";
    }

    if (registeredStudents.length < 6) {
        //document.getElementsByClassName("footer").style = '#footer{position: fixed;bottom: 0;width: 100%;background-color:#3c3c3c;padding : 2px;color: #ffffff;text-align:center;font-size: small}';
        document.getElementById("footer").style.color = "yellow";
        document.getElementById("footer").style.position = "fixed";
        document.getElementById("footer").style.width = "100%";
    }
    else {
        document.getElementById("footer").style.color = "red";
    }
}

