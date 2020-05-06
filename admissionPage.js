function admissionDone() {
    alert('Admission Done');
    document.location = 'admissionList.html';
}

function uploadDocuments() {
    var regno;
    var students = JSON.parse(window.localStorage.getItem("students"));
    if (window.localStorage.getItem("regno") != null) {
        regno = JSON.parse(window.localStorage.getItem("regno"));
    }
    for (let i = 0; i < students.length; i++) {
        if (regno == students[i].registrationNo) {
            students[i].studentPhoto = document.getElementById("studentPhoto").files[0].name;
            students[i].studentAadhaarPhoto = document.getElementById("studentAadhaarPhoto").value;
            students[i].studentDobPhoto = document.getElementById("studentDobPhoto").value;
            students[i].studentOtherDocumentPhoto = document.getElementById("studentOtherDocumentPhoto").value;
            students[i].fatherPhoto = document.getElementById("fatherPhoto").value;
            students[i].fatherAadhaarPhoto = document.getElementById("fatherAadhaarPhoto").value;
            students[i].fatherOtherDocumentPhoto = document.getElementById("fatherOtherDocumentPhoto").value;
            students[i].motherPhoto = document.getElementById("motherPhoto").value;
            students[i].motherAadhaarPhoto = document.getElementById("motherAadhaarPhoto").value;
            students[i].motherOtherDocumentPhoto = document.getElementById("motherOtherDocumentPhoto").value;
            students[i].guardianPhoto = document.getElementById("guardianPhoto").value;
            students[i].guardianAadhaarPhoto = document.getElementById("guardianAadhaarPhoto").value;
            students[i].guardianOtherDocumentPhoto = document.getElementById("guardianOtherDocumentPhoto").value;
            console.log(students[i]);
            var admissionStudents = JSON.parse(window.localStorage.getItem("admission"));
            if (admissionStudents == null) {
                admissionStudents = [];
            }
            console.log(admissionStudents);
            admissionStudents.push(students[i]);
            window.localStorage.setItem("admission", JSON.stringify(admissionStudents));
            admissionDone();
        }
    }
}