
window.onload = addData;

function getUser(){
    user = JSON.parse(window.sessionStorage.getItem("user"));
    document.getElementById("user").innerHTML= "Welcome " + user.name;
}
function registrationNo(regno) {
    console.log(regno);
    window.localStorage.setItem("regno", JSON.stringify(regno));
    document.location = 'registrationFormUpdate.html';
}

function logout(){
    window.sessionStorage.removeItem("user");
    document.location = 'Login.html';
}

function deleteStudent(index) {
    var studentsJson = window.localStorage.getItem("students");
    var students = JSON.parse(studentsJson);
    if(confirm('Do You Want to delete record of student ' + students[index].name + '?')){
        students.splice(index, 1);
        console.log(students);
        window.localStorage.setItem("students", JSON.stringify(students))
        document.location = 'registrationlist.html';
    }
    else{
        return;
    }
}

function addData() {
    var studentsJson = window.localStorage.getItem("students");
    var students = JSON.parse(studentsJson);
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
        cell8.innerHTML = "<button class='btn'>Make Admission</button>";
        cell9.innerHTML = "<button class='btn'>print</button>";
        cell10.innerHTML = "<button class='btn' onclick=deleteStudent(" + i + ")>Delete</button>";
    }
    getUser();
}

