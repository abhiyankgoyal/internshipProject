class Student {

    constructor(registrationNo, category, division, name, dob, gender, admissionDate, admissionType, feeCategory,
        busService, hostel, contactNo, address, landmark, place, district, state, pincode, registrationFees,
        fatherName, fatherContactNo, motherName, motherContactNo, parentAddress, parentLandmark, parentPlace,
        parentDistrict, parentState, parentPincode) {

        this.registrationNo = registrationNo;
        this.category = category;
        this.division = division;
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.admissionDate = admissionDate;
        this.admissionType = admissionType;
        this.feeCategory = feeCategory;
        this.busService = busService;
        this.hostel = hostel;
        this.contactNo = contactNo;
        this.address = address;
        this.landmark = landmark;
        this.place = place;
        this.district = district;
        this.state = state;
        this.pincode = pincode;
        this.registrationFees = registrationFees;
        this.fatherName = fatherName;
        this.fatherContactNo = fatherContactNo;
        this.motherName = motherName;
        this.motherContactNo = motherContactNo;
        this.parentAddress = parentAddress;
        this.parentLandmark = parentLandmark;
        this.parentPlace = parentPlace;
        this.parentDistrict = parentDistrict;
        this.parentState = parentState;
        this.parentPincode = parentPincode;
    }
}

var students = [];

//function getRegistrationNumber() {
// studentsJSON = window.localStorage.getItem("students");
// students = JSON.parse(studentsJSON);
// if (students == null || students.length == 0) {
//     students = [];
//     document.getElementById("registrationNo").value = 1;
// }
// else {
//     console.log(students.length);
//     document.getElementById("registrationNo").value = Number(students[students.length - 1].registrationNo) + 1;
// }
//function createUUID() {
    // var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    //     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    //     return v.toString(16);
    // });
    // console.log(id);
function generateRegistrationNo(){
    var num = Date.now();
    console.log(num);
    document.getElementById("registrationNo").value = num;
}


window.onload = getUser();

function getUser() {
    // user = JSON.parse(window.sessionStorage.getItem("user"));
    // document.getElementById("user").innerHTML= "Welcome " + user.name;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            document.getElementById("user").innerHTML = "Welcome " + res;
        }
    }
    xmlhttp.open("GET", "sessionLogin.php", true);
    xmlhttp.send();
    //createUUID();
    generateRegistrationNo();
}

function logout() {
    //window.sessionStorage.removeItem("user");
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

function createStudent() {

    var data1 = document.getElementById("registrationNo").value;
    var data2 = document.getElementById("studentNewOld").value;
    var data3 = document.getElementById("class").value;
    var data4 = document.getElementById("studentName").value;
    var data5 = document.getElementById("dob").value;
    var data6 = document.getElementById("gender").value;
    var data7 = document.getElementById("dateOfAdmission").value;
    var data8 = document.getElementById("admissionType").value;
    var data9 = document.getElementById("feeCategory").value;
    var data10 = document.getElementById("bus").value;
    var data11 = document.getElementById("hostel").value;
    var data12 = document.getElementById("smsNo").value;
    var data13 = document.getElementById("address").value;
    var data14 = document.getElementById("landmark").value;
    var data15 = document.getElementById("place").value;
    var data16 = document.getElementById("district").value;
    var data17 = document.getElementById("state").value;
    var data18 = document.getElementById("pincode").value;
    var data20 = document.getElementById("registrationFees").value;
    var data21 = document.getElementById("fatherName").value;
    var data22 = document.getElementById("fatherContact").value;
    var data24 = document.getElementById("motherName").value;
    var data25 = document.getElementById("motherContact").value;
    var data27 = document.getElementById("parentAddress").value;
    var data28 = document.getElementById("parentlandmark").value;
    var data29 = document.getElementById("parentPlace").value;
    var data30 = document.getElementById("parentDistrict").value;
    var data31 = document.getElementById("parentState").value;
    var data32 = document.getElementById("parentPincode").value;

    var student = new Student(data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15, data16, data17, data18, data20, data21, data22, data24, data25, data27, data28, data29, data30, data31, data32);

    // students.push(student);
    // window.localStorage.setItem("students", JSON.stringify(students));
    // if (window.localStorage.getItem("students") != null && window.localStorage.getItem("students").length > 0) {
    //     studentsJson = window.localStorage.getItem("students");
    //     students = JSON.parse(studentsJson);
    // }
    // console.log(students);

    //AJAX
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            if (res == 1) {
                alert('successfully registered');
                document.location = 'registrationList.html';
            }
            else {
                console.log(res);
            }
        }
    };
    //xmlhttp.open("GET", "registrationForm.php?student=" + JSON.stringify(student), true);
    //xmlhttp.send();
    xmlhttp.open("POST", "registrationForm.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xmlhttp.send("student="+JSON.stringify(student));
    xmlhttp.send(`student=${JSON.stringify(student)}`);
    //done
}