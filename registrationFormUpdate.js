function getCount() {
    var count = JSON.parse(window.localStorage.getItem("count"));
    if (count == 0) {
        getStudentDetails();
    }
    else {
        getAdmittedStudentDetails();
    }
}

function getStudentDetails() {
    //var regno;
    //var students = JSON.parse(window.localStorage.getItem("students"));
    //console.log(students);
    //if (window.localStorage.getItem("regno") != null) {
    //    regno = JSON.parse(window.localStorage.getItem("regno"));
    //    console.log(regno);
    //}
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
    xmlhttp.open("GET", "registrationFormUpdate.php", false);
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

    //for (let i = 0; i < students.length; i++) {
    //if (regno == students[i].registrationNo) {
    //console.log(students[i]);
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
    //}
    //}

}
window.onload = getUser;

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
    getCount();
}

function updateStudent() {
    // var regNo;
    // if (window.localStorage.getItem("regno") != null) {
    //     regNo = JSON.parse(window.localStorage.getItem("regno"));
    //     console.log(regNo);
    // }
    // var students = JSON.parse(window.localStorage.getItem("students"));
    // for (let i = 0; i < students.length; i++) {
    //     if (regNo == students[i].registrationNo) {
    var student = {
        registrationNo: document.getElementById('registrationNo').value,
        category: document.getElementById('studentNewOld').value,
        division: document.getElementById('class').value,
        name: document.getElementById('studentName').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        admissionDate: document.getElementById('dateOfAdmission').value,
        admissionType: document.getElementById('admissionType').value,
        feeCategory: document.getElementById('feeCategory').value,
        busService: document.getElementById('bus').value,
        hostel: document.getElementById('hostel').value,
        contactNo: document.getElementById('smsNo').value,
        address: document.getElementById('address').value,
        landmark: document.getElementById('landmark').value,
        place: document.getElementById('place').value,
        district: document.getElementById('district').value,
        state: document.getElementById('state').value,
        pincode: document.getElementById('pincode').value,
        registrationFees: document.getElementById('registrationFees').value,
        fatherName: document.getElementById('fatherName').value,
        fatherContactNo: document.getElementById('fatherContact').value,
        motherName: document.getElementById('motherName').value,
        motherContactNo: document.getElementById('motherContact').value,
        parentAddress: document.getElementById('parentAddress').value,
        parentLandmark: document.getElementById('parentLandmark').value,
        parentPlace: document.getElementById('parentPlace').value,
        parentDistrict: document.getElementById('parentDistrict').value,
        parentState: document.getElementById('parentState').value,
        parentPincode: document.getElementById('parentPincode').value
    };

    console.log(student);
    // var student;
    // var studentDetails;
    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         studentDetails = this.responseText;
    //         student = JSON.parse(studentDetails);
    //         console.log(student[0].registrationNo);
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
    // console.log(student[0]);
    //window.localStorage.setItem("students", JSON.stringify(students));
    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            if (res == 1) {
                alert('Updated successfully');
                document.location = 'registrationList.html';
            }
            else {
                alert(res);
                return;
            }
        }
    }
    //xmlhttp2.open("GET", "registeredStudentDetailsUpdate.php?student=" + JSON.stringify(student), false);
    //xmlhttp2.send();
    xmlhttp2.open("POST", "registeredStudentDetailsUpdate.php", false);
    xmlhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp2.send(`student=${JSON.stringify(student)}`);
    //alert('Updated successfully');
    //document.location = 'registrationList.html';
}