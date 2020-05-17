function admissionDone() {
    alert('Admission Done');
    document.location = 'admissionList.html';
}

function uploadDocuments() {
    // var regno;
    // var students = JSON.parse(window.localStorage.getItem("students"));
    // if (window.localStorage.getItem("regno") != null) {
    //     regno = JSON.parse(window.localStorage.getItem("regno"));
    // }
    // for (let i = 0; i < students.length; i++) {
    //     if (regno == students[i].registrationNo) {
    //         students[i].studentPhoto = document.getElementById("studentPhoto").files[0].name;
    //         students[i].studentAadhaarPhoto = document.getElementById("studentAadhaarPhoto").value;
    //         students[i].studentDobPhoto = document.getElementById("studentDobPhoto").value;
    //         students[i].studentOtherDocumentPhoto = document.getElementById("studentOtherDocumentPhoto").value;
    //         students[i].fatherPhoto = document.getElementById("fatherPhoto").value;
    //         students[i].fatherAadhaarPhoto = document.getElementById("fatherAadhaarPhoto").value;
    //         students[i].fatherOtherDocumentPhoto = document.getElementById("fatherOtherDocumentPhoto").value;
    //         students[i].motherPhoto = document.getElementById("motherPhoto").value;
    //         students[i].motherAadhaarPhoto = document.getElementById("motherAadhaarPhoto").value;
    //         students[i].motherOtherDocumentPhoto = document.getElementById("motherOtherDocumentPhoto").value;
    //         students[i].guardianPhoto = document.getElementById("guardianPhoto").value;
    //         students[i].guardianAadhaarPhoto = document.getElementById("guardianAadhaarPhoto").value;
    //         students[i].guardianOtherDocumentPhoto = document.getElementById("guardianOtherDocumentPhoto").value;
    //         console.log(students[i]);
    //         var admissionStudents = JSON.parse(window.localStorage.getItem("admission"));
    //         if (admissionStudents == null) {
    //             admissionStudents = [];
    //         }
    //         console.log(admissionStudents);
    //         admissionStudents.push(students[i]);
    //         window.localStorage.setItem("admission", JSON.stringify(admissionStudents));
    //         admissionDone();
    //     }
    // }
    var studentDetails;
    var student;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            studentDetails = this.responseText;
            student = JSON.parse(studentDetails);
            console.log(student[0]);
        }
    }
    xmlhttp.open("GET", "registrationFormUpdate.php", false);
    xmlhttp.send();

    student[0].studentPhoto = document.getElementById("studentPhoto").files[0].name;
    student[0].studentAadhaarPhoto = document.getElementById("studentAadhaarPhoto").value;
    student[0].studentDobPhoto = document.getElementById("studentDobPhoto").value;
    student[0].studentOtherDocumentPhoto = document.getElementById("studentOtherDocumentPhoto").value;
    student[0].fatherPhoto = document.getElementById("fatherPhoto").value;
    student[0].fatherAadhaarPhoto = document.getElementById("fatherAadhaarPhoto").value;
    student[0].fatherOtherDocumentPhoto = document.getElementById("fatherOtherDocumentPhoto").value;
    student[0].motherPhoto = document.getElementById("motherPhoto").value;
    student[0].motherAadhaarPhoto = document.getElementById("motherAadhaarPhoto").value;
    student[0].motherOtherDocumentPhoto = document.getElementById("motherOtherDocumentPhoto").value;
    student[0].guardianPhoto = document.getElementById("guardianPhoto").value;
    student[0].guardianAadhaarPhoto = document.getElementById("guardianAadhaarPhoto").value;
    student[0].guardianOtherDocumentPhoto = document.getElementById("guardianOtherDocumentPhoto").value;
    console.log(student[0]);

    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            if (res == 1) {
                alert('admitted successfully');
                document.location = 'admissionList.html';
            }
            else{
                alert(res);
                return;
            }
        }
    }
    xmlhttp2.open("GET", "admittingStudent.php?student=" + JSON.stringify(student[0]), false);
    xmlhttp2.send();
}