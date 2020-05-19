function admissionDone() {
    alert('Admission Done');
    document.location = 'admissionList.html';
}

function getAdmittedStudentDetails() {
    var studentDetails;
    var student;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            studentDetails = this.responseText;
            student = JSON.parse(studentDetails);
            console.log(student[0].registrationNo);
        }
    }
    xmlhttp.open("GET", "getAdmittedStudentDetails.php", false);
    xmlhttp.send();

    document.getElementById("registrationNo").value = student[0].registrationNo;
    document.getElementById("studentNewOld").value = student[0].category;
    document.getElementById('class').value = student[0].division;
    document.getElementById('studentName').value = student[0].name;
    document.getElementById('dob').value = student[0].dob;
    document.getElementById('gender').value = student[0].gender;
    document.getElementById('dateOfAdmission').value = student[0].admissionDate;
    document.getElementById('admissionType').value = student[0].admissionType;
    document.getElementById('feeCategory').value = student[0].feeCategory;
    document.getElementById('bus').value = student[0].busService;
    document.getElementById('hostel').value = student[0].hostel;
    document.getElementById('smsNo').value = student[0].contactNo;
    document.getElementById('address').value = student[0].address;
    document.getElementById('landmark').value = student[0].landmark;
    document.getElementById('place').value = student[0].place;
    document.getElementById('district').value = student[0].district;
    document.getElementById('state').value = student[0].state;
    document.getElementById('pincode').value = student[0].pincode;
    document.getElementById('registrationFees').value = student[0].registrationFees;
    document.getElementById('fatherName').value = student[0].fatherName;
    document.getElementById('fatherContact').value = student[0].fatherContactNo;
    document.getElementById('motherName').value = student[0].motherName;
    document.getElementById('motherContact').value = student[0].motherContactNo;
    document.getElementById('parentAddress').value = student[0].parentAddress;
    document.getElementById('parentLandmark').value = student[0].parentLandmark;
    document.getElementById('parentPlace').value = student[0].parentPlace;
    document.getElementById('parentDistrict').value = student[0].parentDistrict;
    document.getElementById('parentState').value = student[0].parentState;
    document.getElementById('parentPincode').value = student[0].parentPincode;
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
    var count = JSON.parse(window.localStorage.getItem("count"));

    // var student = new Object();
    // student.registrationNo = document.getElementById('registrationNo').value;

    if (count == 0) {
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

        student[0].registrationNo = document.getElementById('registrationNo').value
        student[0].category = document.getElementById('studentNewOld').value
        student[0].division = document.getElementById('class').value
        student[0].name = document.getElementById('studentName').value
        student[0].dob = document.getElementById('dob').value
        student[0].gender = document.getElementById('gender').value
        student[0].admissionDate = document.getElementById('dateOfAdmission').value
        student[0].admissionType = document.getElementById('admissionType').value
        student[0].feeCategory = document.getElementById('feeCategory').value
        student[0].busService = document.getElementById('bus').value
        student[0].hostel = document.getElementById('hostel').value
        student[0].contactNo = document.getElementById('smsNo').value
        student[0].address = document.getElementById('address').value
        student[0].landmark = document.getElementById('landmark').value
        student[0].place = document.getElementById('place').value
        student[0].district = document.getElementById('district').value
        student[0].state = document.getElementById('state').value
        student[0].pincode = document.getElementById('pincode').value
        student[0].registrationFees = document.getElementById('registrationFees').value
        student[0].fatherName = document.getElementById('fatherName').value
        student[0].fatherContactNo = document.getElementById('fatherContact').value
        student[0].motherName = document.getElementById('motherName').value
        student[0].motherContactNo = document.getElementById('motherContact').value
        student[0].parentAddress = document.getElementById('parentAddress').value
        student[0].parentLandmark = document.getElementById('parentLandmark').value
        student[0].parentPlace = document.getElementById('parentPlace').value
        student[0].parentDistrict = document.getElementById('parentDistrict').value
        student[0].parentState = document.getElementById('parentState').value
        student[0].parentPincode = document.getElementById('parentPincode').value
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
                else {
                    alert(res);
                    return;
                }
            }
        }
        xmlhttp2.open("GET", "admittingStudent.php?student=" + JSON.stringify(student[0]), false);
        xmlhttp2.send();
    }
    else {
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
        xmlhttp.open("GET", "getAdmittedStudentDetails.php", false);
        xmlhttp.send();
        
        student[0].registrationNo = document.getElementById('registrationNo').value
        student[0].category = document.getElementById('studentNewOld').value
        student[0].division = document.getElementById('class').value
        student[0].name = document.getElementById('studentName').value
        student[0].dob = document.getElementById('dob').value
        student[0].gender = document.getElementById('gender').value
        student[0].admissionDate = document.getElementById('dateOfAdmission').value
        student[0].admissionType = document.getElementById('admissionType').value
        student[0].feeCategory = document.getElementById('feeCategory').value
        student[0].busService = document.getElementById('bus').value
        student[0].hostel = document.getElementById('hostel').value
        student[0].contactNo = document.getElementById('smsNo').value
        student[0].address = document.getElementById('address').value
        student[0].landmark = document.getElementById('landmark').value
        student[0].place = document.getElementById('place').value
        student[0].district = document.getElementById('district').value
        student[0].state = document.getElementById('state').value
        student[0].pincode = document.getElementById('pincode').value
        student[0].registrationFees = document.getElementById('registrationFees').value
        student[0].fatherName = document.getElementById('fatherName').value
        student[0].fatherContactNo = document.getElementById('fatherContact').value
        student[0].motherName = document.getElementById('motherName').value
        student[0].motherContactNo = document.getElementById('motherContact').value
        student[0].parentAddress = document.getElementById('parentAddress').value
        student[0].parentLandmark = document.getElementById('parentLandmark').value
        student[0].parentPlace = document.getElementById('parentPlace').value
        student[0].parentDistrict = document.getElementById('parentDistrict').value
        student[0].parentState = document.getElementById('parentState').value
        student[0].parentPincode = document.getElementById('parentPincode').value
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
                    alert('updated successfully');
                    document.location = 'admissionList.html';
                }
                else {
                    alert(res);
                    return;
                }
            }
        }
        xmlhttp2.open("GET", "updateAdmittedStudentDetails.php?student=" + JSON.stringify(student[0]), false);
        xmlhttp2.send();

    }
}