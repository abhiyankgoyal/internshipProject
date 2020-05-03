function getStudentDetails() {
    var regNo;
    var students = JSON.parse(window.localStorage.getItem("students"));
    console.log(students);
    if (window.localStorage.getItem("regno") != null) {
        regNo = JSON.parse(window.localStorage.getItem("regno"));
        console.log(regNo);
    }
    for (let i = 0; i < students.length; i++) {
        if (regNo == students[i].registrationNo) {
            console.log(students[i]);
            document.getElementById("registrationNo").value = students[i].registrationNo;
            document.getElementById("studentNewOld").value = students[i].category;
            document.getElementById('class').value = students[i].division;
            document.getElementById('studentName').value = students[i].name;
            document.getElementById('dob').value = students[i].dob;
            document.getElementById('gender').value = students[i].gender;
            document.getElementById('dateOfAdmission').value = students[i].admissionDate;
            document.getElementById('admissionType').value = students[i].admissionType;
            document.getElementById('feeCategory').value = students[i].feeCategory;
            document.getElementById('bus').value = students[i].busService;
            document.getElementById('hostel').value = students[i].hostel;
            document.getElementById('smsNo').value = students[i].contactNo;
            document.getElementById('address').value = students[i].address;
            document.getElementById('landmark').value = students[i].landmark;
            document.getElementById('place').value = students[i].place;
            document.getElementById('district').value = students[i].district;
            document.getElementById('state').value = students[i].state;
            document.getElementById('pincode').value = students[i].pincode;
            document.getElementById('photo').value = students[i].photo;
            document.getElementById('registrationFees').value = students[i].registrationFees;
            document.getElementById('fatherName').value = students[i].fatherName;
            document.getElementById('fatherContact').value = students[i].fatherContactNo;
            document.getElementById('fatherPhoto').value = students[i].fatherPhoto;
            document.getElementById('motherName').value = students[i].motherName;
            document.getElementById('motherContact').value = students[i].motherContactNo;
            document.getElementById('motherPhoto').value = students[i].motherPhoto;
            document.getElementById('parentAddress').value = students[i].parentAddress;
            document.getElementById('parentLandmark').value = students[i].parentLandmark;
            document.getElementById('parentPlace').value = students[i].parentPlace;
            document.getElementById('parentDistrict').value = students[i].parentDistrict;
            document.getElementById('parentState').value = students[i].parentState;
            document.getElementById('parentPincode').value = students[i].parentPincode;
        }
    }

}
window.onload = getUser;

function logout(){
    window.sessionStorage.removeItem("user");
    document.location = 'Login.html';
}

function getUser(){
    user = JSON.parse(window.sessionStorage.getItem("user"));
    document.getElementById("user").innerHTML= "Welcome " + user.name;
    getStudentDetails();
}

function updateStudent() {
    var regNo;
    if (window.localStorage.getItem("regno") != null) {
        regNo = JSON.parse(window.localStorage.getItem("regno"));
        console.log(regNo);
    }
    var students = JSON.parse(window.localStorage.getItem("students"));
    for (let i = 0; i < students.length; i++) {
        if (regNo == students[i].registrationNo) {
            students[i].dob = document.getElementById('registrationNo').value
            students[i].category = document.getElementById('studentNewOld').value
            students[i].division = document.getElementById('class').value
            students[i].name = document.getElementById('studentName').value
            students[i].dob = document.getElementById('dob').value
            students[i].gender = document.getElementById('gender').value
            students[i].admissionDate = document.getElementById('dateOfAdmission').value
            students[i].admissionType = document.getElementById('admissionType').value
            students[i].feeCategory = document.getElementById('feeCategory').value
            students[i].busService = document.getElementById('bus').value
            students[i].hostel = document.getElementById('hostel').value
            students[i].contactNo = document.getElementById('smsNo').value
            students[i].address = document.getElementById('address').value
            students[i].landmark = document.getElementById('landmark').value
            students[i].place = document.getElementById('place').value
            students[i].district = document.getElementById('district').value
            students[i].state = document.getElementById('state').value
            students[i].pincode = document.getElementById('pincode').value
            students[i].photo = document.getElementById('photo').value
            students[i].registrationFees = document.getElementById('registrationFees').value
            students[i].fatherName = document.getElementById('fatherName').value
            students[i].fatherContactNo = document.getElementById('fatherContact').value
            students[i].fatherPhoto = document.getElementById('fatherPhoto').value
            students[i].motherName = document.getElementById('motherName').value
            students[i].motherContactNo = document.getElementById('motherContact').value
            students[i].motherPhoto = document.getElementById('motherPhoto').value
            students[i].parentAddress = document.getElementById('parentAddress').value
            students[i].parentLandmark = document.getElementById('parentLandmark').value
            students[i].parentPlace = document.getElementById('parentPlace').value
            students[i].parentDistrict = document.getElementById('parentDistrict').value
            students[i].parentState = document.getElementById('parentState').value
            students[i].parentPincode = document.getElementById('parentPincode').value
            console.log(students[i]);
            window.localStorage.setItem("students",JSON.stringify(students));
            alert('Updated successfully');
            document.location = 'registrationList.html';
        }

    }
}