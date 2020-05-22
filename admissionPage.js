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
            console.log(student);
        }
    }
    xmlhttp.open("GET", "getAdmittedStudentDetails.php", false);
    xmlhttp.send();

    document.getElementById('registrationNo').value = student.registrationNo;
    document.getElementById('studentNewOld').value = student.category;
    document.getElementById('class').value = student.division;
    document.getElementById('studentName').value = student.name;
    document.getElementById('dob').value = student.dob;
    document.getElementById('gender').value = student.gender;
    document.getElementById('dateOfAdmission').value = student.admissionDate;
    document.getElementById('admissionType').value = student.admissionType;
    document.getElementById('feeCategory').value = student.feeCategory;
    document.getElementById('bus').value = student.busService;
    document.getElementById('hostel').value = student.hostel;
    document.getElementById('smsNo').value = student.contactNo;
    document.getElementById('address').value = student.address;
    document.getElementById('landmark').value = student.landmark;
    document.getElementById('place').value = student.place;
    document.getElementById('district').value = student.district;
    document.getElementById('state').value = student.state;
    document.getElementById('pincode').value = student.pincode;
    document.getElementById('registrationFees').value = student.registrationFees;
    document.getElementById('fatherName').value = student.fatherName;
    document.getElementById('fatherContact').value = student.fatherContactNo;
    document.getElementById('motherName').value = student.motherName;
    document.getElementById('motherContact').value = student.motherContactNo;
    document.getElementById('parentAddress').value = student.parentAddress;
    document.getElementById('parentLandmark').value = student.parentLandmark;
    document.getElementById('parentPlace').value = student.parentPlace;
    document.getElementById('parentDistrict').value = student.parentDistrict;
    document.getElementById('parentState').value = student.parentState;
    document.getElementById('parentPincode').value = student.parentPincode;
    document.getElementById('studentPhoto').fileName = student.studentPhoto;
    document.getElementById('studentAadhaarPhoto').fileName = student.studentAadhaarPhoto;
    document.getElementById('studentDobPhoto').fileName = student.studentDobPhoto;
    document.getElementById('studentOtherDocumentPhoto').fileName = student.studentOtherDocumentPhoto;
    document.getElementById('fatherPhoto').fileName = student.fatherPhoto;
    document.getElementById('fatherAadhaarPhoto').fileName = student.fatherAadhaarPhoto;
    document.getElementById('fatherOtherDocumentPhoto').fileName = student.fatherOtherDocumentPhoto;
    document.getElementById('motherPhoto').fileName = student.motherPhoto;
    document.getElementById('motherAadhaarPhoto').fileName = student.motherAadhaarPhoto;
    document.getElementById('motherOtherDocumentPhoto').fileName = student.motherOtherDocumentPhoto;
    document.getElementById('guardianPhoto').fileName = student.guardianPhoto;
    document.getElementById('guardianAadhaarPhoto').fileName = student.guardianAadhaarPhoto;
    document.getElementById('guardianOtherDocumentPhoto').fileName = student.guardianOtherDocumentPhoto;



    // document.getElementById("registrationNo").value = student[0].registrationNo;
    // document.getElementById("studentNewOld").value = student[0].category;
    // document.getElementById('class').value = student[0].division;
    // document.getElementById('studentName').value = student[0].name;
    // document.getElementById('dob').value = student[0].dob;
    // document.getElementById('gender').value = student[0].gender;
    // document.getElementById('dateOfAdmission').value = student[0].admissionDate;
    // document.getElementById('admissionType').value = student[0].admissionType;
    // document.getElementById('feeCategory').value = student[0].feeCategory;
    // document.getElementById('bus').value = student[0].busService;
    // document.getElementById('hostel').value = student[0].hostel;
    // document.getElementById('smsNo').value = student[0].contactNo;
    // document.getElementById('address').value = student[0].address;
    // document.getElementById('landmark').value = student[0].landmark;
    // document.getElementById('place').value = student[0].place;
    // document.getElementById('district').value = student[0].district;
    // document.getElementById('state').value = student[0].state;
    // document.getElementById('pincode').value = student[0].pincode;
    // document.getElementById('registrationFees').value = student[0].registrationFees;
    // document.getElementById('fatherName').value = student[0].fatherName;
    // document.getElementById('fatherContact').value = student[0].fatherContactNo;
    // document.getElementById('motherName').value = student[0].motherName;
    // document.getElementById('motherContact').value = student[0].motherContactNo;
    // document.getElementById('parentAddress').value = student[0].parentAddress;
    // document.getElementById('parentLandmark').value = student[0].parentLandmark;
    // document.getElementById('parentPlace').value = student[0].parentPlace;
    // document.getElementById('parentDistrict').value = student[0].parentDistrict;
    // document.getElementById('parentState').value = student[0].parentState;
    // document.getElementById('parentPincode').value = student[0].parentPincode;
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

    var student = new Object();

    student.registrationNo = document.getElementById('registrationNo').value;
    student.category = document.getElementById('studentNewOld').value;
    student.division = document.getElementById('class').value;
    student.name = document.getElementById('studentName').value;
    student.dob = document.getElementById('dob').value;
    student.gender = document.getElementById('gender').value;
    student.admissionDate = document.getElementById('dateOfAdmission').value;
    student.admissionType = document.getElementById('admissionType').value;
    student.feeCategory = document.getElementById('feeCategory').value;
    student.busService = document.getElementById('bus').value;
    student.hostel = document.getElementById('hostel').value;
    student.contactNo = document.getElementById('smsNo').value;
    student.address = document.getElementById('address').value;
    student.landmark = document.getElementById('landmark').value;
    student.place = document.getElementById('place').value;
    student.district = document.getElementById('district').value;
    student.state = document.getElementById('state').value;
    student.pincode = document.getElementById('pincode').value;
    student.registrationFees = document.getElementById('registrationFees').value;
    student.fatherName = document.getElementById('fatherName').value;
    student.fatherContactNo = document.getElementById('fatherContact').value;
    student.motherName = document.getElementById('motherName').value;
    student.motherContactNo = document.getElementById('motherContact').value;
    student.parentAddress = document.getElementById('parentAddress').value;
    student.parentLandmark = document.getElementById('parentLandmark').value;
    student.parentPlace = document.getElementById('parentPlace').value;
    student.parentDistrict = document.getElementById('parentDistrict').value;
    student.parentState = document.getElementById('parentState').value;
    student.parentPincode = document.getElementById('parentPincode').value;
    student.studentPhoto = document.getElementById('studentPhoto').fileName;
    if(student.studentPhoto == undefined){
        student.studentPhoto = "";
    }
    student.studentAadhaarPhoto = document.getElementById('studentAadhaarPhoto').fileName;
    if(student.studentAadhaarPhoto == undefined){
        student.studentAadhaarPhoto = "";
    }
    student.studentDobPhoto = document.getElementById('studentDobPhoto').fileName;
    if(student.studentDobPhoto == undefined){
        student.studentDobPhoto = "";
    }
    student.studentOtherDocumentPhoto = document.getElementById('studentOtherDocumentPhoto').fileName;
    if(student.studentOtherDocumentPhoto == undefined){
        student.studentOtherDocumentPhoto = "";
    }
    student.fatherPhoto = document.getElementById('fatherPhoto').fileName;
    if(student.fatherPhoto == undefined){
        student.fatherPhoto = "";
    }
    student.fatherAadhaarPhoto = document.getElementById('fatherAadhaarPhoto').fileName;
    if(student.fatherAadhaarPhoto == undefined){
        student.fatherAadhaarPhoto = "";
    }
    student.fatherOtherDocumentPhoto = document.getElementById('fatherOtherDocumentPhoto').fileName;
    if(student.fatherOtherDocumentPhoto == undefined){
        student.fatherOtherDocumentPhoto = "";
    }
    student.motherPhoto = document.getElementById('motherPhoto').fileName;
    if(student.motherPhoto == undefined){
        student.motherPhoto = "";
    }
    student.motherAadhaarPhoto = document.getElementById('motherAadhaarPhoto').fileName;
    if(student.motherAadhaarPhoto == undefined){
        student.motherAadhaarPhoto = "";
    }
    student.motherOtherDocumentPhoto = document.getElementById('motherOtherDocumentPhoto').fileName;
    if(student.motherOtherDocumentPhoto == undefined){
        student.motherOtherDocumentPhoto = "";
    }
    student.guardianPhoto = document.getElementById('guardianPhoto').fileName;
    if(student.guardianPhoto == undefined){
        student.guardianPhoto = "";
    }
    student.guardianAadhaarPhoto = document.getElementById('guardianAadhaarPhoto').fileName;
    if(student.guardianAadhaarPhoto == undefined){
        student.guardianAadhaarPhoto = "";
    }
    student.guardianOtherDocumentPhoto = document.getElementById('guardianOtherDocumentPhoto').fileName;
    if(student.guardianOtherDocumentPhoto == undefined){
        student.guardianOtherDocumentPhoto = "";
    }


    console.log(student);
    var studentPhotoFile = [];
    if (document.getElementById('studentPhoto').files.length > 0) {
        student.studentPhoto = document.getElementById('studentPhoto').files[0].name;
        studentPhotoFile = document.getElementById('studentPhoto').files;
    }

    var studentAadhaarPhotoFile = [];
    if (document.getElementById('studentAadhaarPhoto').files.length > 0) {
        student.studentAadhaarPhoto = document.getElementById('studentAadhaarPhoto').files[0].name;
        studentAadhaarPhotoFile = document.getElementById('studentAadhaarPhoto').files;
    }

    var studentDobPhotoFile = [];
    if (document.getElementById('studentDobPhoto').files.length > 0) {
        student.studentDobPhoto = document.getElementById('studentDobPhoto').files[0].name;
        studentDobPhotoFile = document.getElementById('studentDobPhoto').files;
    }

    var studentOtherDocumentPhotoFile = [];
    if (document.getElementById('studentOtherDocumentPhoto').files.length > 0) {
        student.studentOtherDocumentPhoto = document.getElementById('studentOtherDocumentPhoto').files[0].name;
        studentOtherDocumentPhotoFile = document.getElementById('studentOtherDocumentPhoto').files;
    }

    var fatherPhotoFile = [];
    if (document.getElementById('fatherPhoto').files.length > 0) {
        student.fatherPhoto = document.getElementById('fatherPhoto').files[0].name;
        fatherPhotoFile = document.getElementById('fatherPhoto').files;
    }

    var fatherAadhaarPhotoFile = [];
    if (document.getElementById('fatherAadhaarPhoto').files.length > 0) {
        student.fatherAadhaarPhoto = document.getElementById('fatherAadhaarPhoto').files[0].name;
        fatherAadhaarPhotoFile = document.getElementById('fatherAadhaarPhoto').files;
    }

    var fatherOtherDocumentPhotoFile = [];
    if (document.getElementById('fatherOtherDocumentPhoto').files.length > 0) {
        student.fatherOtherDocumentPhoto = document.getElementById('fatherOtherDocumentPhoto').files[0].name;
        fatherOtherDocumentPhotoFile = document.getElementById('fatherOtherDocumentPhoto').files;
    }

    var motherPhotoFile = [];
    if (document.getElementById('motherPhoto').files.length > 0) {
        student.motherPhoto = document.getElementById('motherPhoto').files[0].name;
        motherPhotoFile = document.getElementById('motherPhoto').files;
    }

    var motherAadhaarPhotoFile = [];
    if (document.getElementById('motherAadhaarPhoto').files.length > 0) {
        student.motherAadhaarPhoto = document.getElementById('motherAadhaarPhoto').files[0].name;
        motherAadhaarPhotoFile = document.getElementById('motherAadhaarPhoto').files;
    }

    var motherOtherDocumentPhotoFile = [];
    if (document.getElementById('motherOtherDocumentPhoto').files.length > 0) {
        student.motherOtherDocumentPhoto = document.getElementById('motherOtherDocumentPhoto').files[0].name;
        motherOtherDocumentPhotoFile = document.getElementById('motherOtherDocumentPhoto').files;
    }

    var guardianPhotoFile = [];
    if (document.getElementById('guardianPhoto').files.length > 0) {
        student.guardianPhoto = document.getElementById('guardianPhoto').files[0].name;
        guardianPhotoFile = document.getElementById('guardianPhoto').files;
    }

    var guardianAadhaarPhotoFile = [];
    if (document.getElementById('guardianAadhaarPhoto').files.length > 0) {
        student.guardianAadhaarPhoto = document.getElementById('guardianAadhaarPhoto').files[0].name;
        guardianAadhaarPhotoFile = document.getElementById('guardianAadhaarPhoto').files;
    }

    var guardianOtherDocumentPhotoFile = [];
    if (document.getElementById('guardianOtherDocumentPhoto').files.length > 0) {
        student.guardianOtherDocumentPhoto = document.getElementById('guardianOtherDocumentPhoto').files[0].name;
        guardianOtherDocumentPhotoFile = document.getElementById('guardianOtherDocumentPhoto').files;
    }

    console.log(student);

    var formData = new FormData();

    if (studentPhotoFile.length > 0) {
        formData.append("file1", studentPhotoFile[0]);
    }
    if (studentAadhaarPhotoFile.length > 0) {
        formData.append("file2", studentAadhaarPhotoFile[0]);
    }
    if (studentDobPhotoFile.length > 0) {
        formData.append("file3", studentDobPhotoFile[0]);
    }
    if (studentOtherDocumentPhotoFile.length > 0) {
        formData.append("file4", studentOtherDocumentPhotoFile[0]);
    }
    if (fatherPhotoFile.length > 0) {
        formData.append("file5", fatherPhotoFile[0]);
    }
    if (fatherAadhaarPhotoFile.length > 0) {
        formData.append("file6", fatherAadhaarPhotoFile[0]);
    }
    if (fatherOtherDocumentPhotoFile.length > 0) {
        formData.append("file7", fatherOtherDocumentPhotoFile[0]);
    }
    if (motherPhotoFile.length > 0) {
        formData.append("file8", motherPhotoFile[0]);
    }
    if (motherAadhaarPhotoFile.length > 0) {
        formData.append("file9", motherAadhaarPhotoFile[0]);
    }
    if (motherOtherDocumentPhotoFile.length > 0) {
        formData.append("file10", motherOtherDocumentPhotoFile[0]);
    }
    if (guardianPhotoFile.length > 0) {
        formData.append("file11", guardianPhotoFile[0]);
    }
    if (guardianAadhaarPhotoFile.length > 0) {
        formData.append("file12", guardianAadhaarPhotoFile[0]);
    }
    if (guardianOtherDocumentPhotoFile.length > 0) {
        formData.append("file13", guardianOtherDocumentPhotoFile[0]);
    }

    // if (studentPhotoFile.length > 0 || studentAadhaarPhotoFile.length > 0 || studentDobPhotoFile.length > 0 ||
    //     studentOtherDocumentPhotoFile.length > 0 || fatherPhotoFile.length > 0 || fatherAadhaarPhotoFile.length > 0 ||
    //     fatherOtherDocumentPhotoFile.length > 0 || motherPhotoFile.length > 0 || motherAadhaarPhotoFile.length > 0 ||
    //     motherOtherDocumentPhotoFile.length > 0 || guardianPhotoFile.length > 0 || guardianAadhaarPhotoFile.length > 0 ||
    //     guardianOtherDocumentPhotoFile.length > 0) {

    //     // var formData = new FormData();
    //     formData.append("file1", studentPhotoFile[0]);
    //     formData.append("file2", studentAadhaarPhotoFile[0]);
    //     formData.append("file3", studentDobPhotoFile[0]);
    //     formData.append("file4", studentOtherDocumentPhotoFile[0]);
    //     formData.append("file5", fatherPhotoFile[0]);
    //     formData.append("file6", fatherAadhaarPhotoFile[0]);
    //     formData.append("file7", fatherOtherDocumentPhotoFile[0]);
    //     formData.append("file8", motherPhotoFile[0]);
    //     formData.append("file9", motherAadhaarPhotoFile[0]);
    //     formData.append("file10", motherOtherDocumentPhotoFile[0]);
    //     formData.append("file11", guardianPhotoFile[0]);
    //     formData.append("file12", guardianAadhaarPhotoFile[0]);
    //     formData.append("file13", guardianOtherDocumentPhotoFile[0]);

    var xhttp = new XMLHttpRequest();

    // Set POST method and ajax file path
    xhttp.open("POST", "php_move_upload_file.php", false);

    // call on request changes state
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var response = this.responseText;
            if (response == 1) {
                alert("Documents Uploaded successfully.");
            }
            //  else {
            //     alert("File not uploaded.");
            // }
        }
    };

    // Send request with data
    xhttp.send(formData);

    // else {
    // alert("Please select a file");
    // return;

    if (count == 0) {
        // var studentDetails;
        // var student;
        // var xmlhttp = new XMLHttpRequest();
        // xmlhttp.onreadystatechange = function () {
        //     if (this.readyState == 4 && this.status == 200) {
        //         studentDetails = this.responseText;
        //         student = JSON.parse(studentDetails);
        //         console.log(student[0]);
        //     }
        // }
        // xmlhttp.open("GET", "registrationFormUpdate.php", false);
        // xmlhttp.send();

        // student[0].registrationNo = document.getElementById('registrationNo').value
        // student[0].category = document.getElementById('studentNewOld').value
        // student[0].division = document.getElementById('class').value
        // student[0].name = document.getElementById('studentName').value
        // student[0].dob = document.getElementById('dob').value
        // student[0].gender = document.getElementById('gender').value
        // student[0].admissionDate = document.getElementById('dateOfAdmission').value
        // student[0].admissionType = document.getElementById('admissionType').value
        // student[0].feeCategory = document.getElementById('feeCategory').value
        // student[0].busService = document.getElementById('bus').value
        // student[0].hostel = document.getElementById('hostel').value
        // student[0].contactNo = document.getElementById('smsNo').value
        // student[0].address = document.getElementById('address').value
        // student[0].landmark = document.getElementById('landmark').value
        // student[0].place = document.getElementById('place').value
        // student[0].district = document.getElementById('district').value
        // student[0].state = document.getElementById('state').value
        // student[0].pincode = document.getElementById('pincode').value
        // student[0].registrationFees = document.getElementById('registrationFees').value
        // student[0].fatherName = document.getElementById('fatherName').value
        // student[0].fatherContactNo = document.getElementById('fatherContact').value
        // student[0].motherName = document.getElementById('motherName').value
        // student[0].motherContactNo = document.getElementById('motherContact').value
        // student[0].parentAddress = document.getElementById('parentAddress').value
        // student[0].parentLandmark = document.getElementById('parentLandmark').value
        // student[0].parentPlace = document.getElementById('parentPlace').value
        // student[0].parentDistrict = document.getElementById('parentDistrict').value
        // student[0].parentState = document.getElementById('parentState').value
        // student[0].parentPincode = document.getElementById('parentPincode').value
        // student[0].studentPhoto = document.getElementById("studentPhoto").files[0].name;
        // student[0].studentAadhaarPhoto = document.getElementById("studentAadhaarPhoto").value;
        // student[0].studentDobPhoto = document.getElementById("studentDobPhoto").value;
        // student[0].studentOtherDocumentPhoto = document.getElementById("studentOtherDocumentPhoto").value;
        // student[0].fatherPhoto = document.getElementById("fatherPhoto").value;
        // student[0].fatherAadhaarPhoto = document.getElementById("fatherAadhaarPhoto").value;
        // student[0].fatherOtherDocumentPhoto = document.getElementById("fatherOtherDocumentPhoto").value;
        // student[0].motherPhoto = document.getElementById("motherPhoto").value;
        // student[0].motherAadhaarPhoto = document.getElementById("motherAadhaarPhoto").value;
        // student[0].motherOtherDocumentPhoto = document.getElementById("motherOtherDocumentPhoto").value;
        // student[0].guardianPhoto = document.getElementById("guardianPhoto").value;
        // student[0].guardianAadhaarPhoto = document.getElementById("guardianAadhaarPhoto").value;
        // student[0].guardianOtherDocumentPhoto = document.getElementById("guardianOtherDocumentPhoto").value;
        // console.log(student[0]);

        var xmlhttp2 = new XMLHttpRequest();
        xmlhttp2.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var res = this.responseText;
                if (res == 1) {
                    alert('Admitted Successfully');
                    document.location = 'admissionList.html';
                }
                else {
                    alert(res);
                    return;
                }
            }
        }
        //xmlhttp2.open("GET", "admittingStudent.php?student=" + JSON.stringify(student), false);
        //xmlhttp2.send();
        xmlhttp2.open("POST", "admittingStudent.php", false);
        xmlhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp2.send(`student=${JSON.stringify(student)}`);
    }
    else {
        // var studentDetails;
        // var student;
        // var xmlhttp = new XMLHttpRequest();
        // xmlhttp.onreadystatechange = function () {
        //     if (this.readyState == 4 && this.status == 200) {
        //         studentDetails = this.responseText;
        //         student = JSON.parse(studentDetails);
        //         console.log(student[0]);
        //     }
        // }
        // xmlhttp.open("GET", "getAdmittedStudentDetails.php", false);
        // xmlhttp.send();

        // student[0].registrationNo = document.getElementById('registrationNo').value
        // student[0].category = document.getElementById('studentNewOld').value
        // student[0].division = document.getElementById('class').value
        // student[0].name = document.getElementById('studentName').value
        // student[0].dob = document.getElementById('dob').value
        // student[0].gender = document.getElementById('gender').value
        // student[0].admissionDate = document.getElementById('dateOfAdmission').value
        // student[0].admissionType = document.getElementById('admissionType').value
        // student[0].feeCategory = document.getElementById('feeCategory').value
        // student[0].busService = document.getElementById('bus').value
        // student[0].hostel = document.getElementById('hostel').value
        // student[0].contactNo = document.getElementById('smsNo').value
        // student[0].address = document.getElementById('address').value
        // student[0].landmark = document.getElementById('landmark').value
        // student[0].place = document.getElementById('place').value
        // student[0].district = document.getElementById('district').value
        // student[0].state = document.getElementById('state').value
        // student[0].pincode = document.getElementById('pincode').value
        // student[0].registrationFees = document.getElementById('registrationFees').value
        // student[0].fatherName = document.getElementById('fatherName').value
        // student[0].fatherContactNo = document.getElementById('fatherContact').value
        // student[0].motherName = document.getElementById('motherName').value
        // student[0].motherContactNo = document.getElementById('motherContact').value
        // student[0].parentAddress = document.getElementById('parentAddress').value
        // student[0].parentLandmark = document.getElementById('parentLandmark').value
        // student[0].parentPlace = document.getElementById('parentPlace').value
        // student[0].parentDistrict = document.getElementById('parentDistrict').value
        // student[0].parentState = document.getElementById('parentState').value
        // student[0].parentPincode = document.getElementById('parentPincode').value
        // student[0].studentPhoto = document.getElementById("studentPhoto").files[0].name;
        // student[0].studentAadhaarPhoto = document.getElementById("studentAadhaarPhoto").value;
        // student[0].studentDobPhoto = document.getElementById("studentDobPhoto").value;
        // student[0].studentOtherDocumentPhoto = document.getElementById("studentOtherDocumentPhoto").value;
        // student[0].fatherPhoto = document.getElementById("fatherPhoto").value;
        // student[0].fatherAadhaarPhoto = document.getElementById("fatherAadhaarPhoto").value;
        // student[0].fatherOtherDocumentPhoto = document.getElementById("fatherOtherDocumentPhoto").value;
        // student[0].motherPhoto = document.getElementById("motherPhoto").value;
        // student[0].motherAadhaarPhoto = document.getElementById("motherAadhaarPhoto").value;
        // student[0].motherOtherDocumentPhoto = document.getElementById("motherOtherDocumentPhoto").value;
        // student[0].guardianPhoto = document.getElementById("guardianPhoto").value;
        // student[0].guardianAadhaarPhoto = document.getElementById("guardianAadhaarPhoto").value;
        // student[0].guardianOtherDocumentPhoto = document.getElementById("guardianOtherDocumentPhoto").value;
        // console.log(student[0]);

        var xmlhttp2 = new XMLHttpRequest();
        xmlhttp2.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var res = this.responseText;
                if (res == 1) {
                    alert('Student Details Updated Successfully');
                    document.location = 'admissionList.html';
                }
                else {
                    alert(res);
                    return;
                }
            }
        }
        // xmlhttp2.open("GET", "updateAdmittedStudentDetails.php?student=" + JSON.stringify(student), false);
        // xmlhttp2.send();
        xmlhttp2.open("POST", "updateAdmittedStudentDetails.php", false);
        xmlhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp2.send("student=" + JSON.stringify(student));
    }
}