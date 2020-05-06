
window.onload = addData;

function getUser() {
    user = JSON.parse(window.sessionStorage.getItem("user"));
    document.getElementById("user").innerHTML = "Welcome " + user.name;
}
function registrationNo(regno) {
    console.log(regno);
    window.localStorage.setItem("regno", JSON.stringify(regno));
    document.location = 'registrationFormUpdate.html';
}

function logout() {
    window.sessionStorage.removeItem("user");
    document.location = 'Login.html';
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
    var studentsJson = window.localStorage.getItem("students");
    var students = JSON.parse(studentsJson);
    var admissionStudents = JSON.parse(window.localStorage.getItem("admission"));
    console.log(students);
    var tableStudent = document.getElementById("student_table");
    for (let i = 0; i < students.length; i++) {
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
        cell2.innerHTML = students[i].name;
        cell3.innerHTML = students[i].fatherName;
        cell4.innerHTML = students[i].division;
        cell5.innerHTML = students[i].fatherContactNo;
        cell6.innerHTML = students[i].admissionDate;
        cell7.innerHTML = "<button class= 'btn' onclick=registrationNo(" + students[i].registrationNo + ")>Modify</button>";
        if (admissionStudents.length == null || admissionStudents.length == 0) {
            cell8.innerHTML = "<button class='btn' onclick=makeAdmission(" + students[i].registrationNo + ")>Make Admission</button>";
        }
        else {
            let count = 0;
            for (let j = 0; j < admissionStudents.length; j++) {
                if (students[i].registrationNo == admissionStudents[j].registrationNo) {
                    cell8.innerHTML = "<button type='button' title='already admitted' class='disabledBtn' onclick=makeAdmission(" + students[i].registrationNo + ") disabled>Make Admission</button>";
                    count++;
                    break;
                }
            }
            if (count == 0) {
                cell8.innerHTML = "<button class='btn' onclick=makeAdmission(" + students[i].registrationNo + ")>Make Admission</button>";
            }

        }
        cell9.innerHTML = "<button class='btn'>print</button>";
        cell10.innerHTML = "<button class='btn' onclick=deleteStudent(" + i + ")>Delete</button>";
    }

    if (students.length < 6) {
        //document.getElementsByClassName("footer").style = '#footer{position: fixed;bottom: 0;width: 100%;background-color:#3c3c3c;padding : 2px;color: #ffffff;text-align:center;font-size: small}';
        document.getElementById("footer").style.color = "yellow";
        document.getElementById("footer").style.position = "fixed";
        document.getElementById("footer").style.width = "100%";
    }
    else {
        document.getElementById("footer").style.color = "red";
    }
    getUser();
}

