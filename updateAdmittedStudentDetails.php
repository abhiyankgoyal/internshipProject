<?php
    session_start();
    $regno = $_SESSION["regno"];
    $student = json_decode($_REQUEST["student"]);
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'STUDENTS_REGISTRATION';
    
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else{
        $sql = "UPDATE admittedStudents
                SET  registrationNo = '$student->registrationNo',
category = '$student->category',
division = '$student->division',
name = '$student->name',
dob = '$student->dob',
gender = '$student->gender',
admissionDate = '$student->admissionDate',
admissionType = '$student->admissionType',
feeCategory = '$student->feeCategory',
busService = '$student->busService',
hostel = '$student->hostel',
contactNo = '$student->contactNo',
address = '$student->address',
landmark = '$student->landmark',
place = '$student->place',
district = '$student->district',
state = '$student->state',
pincode = '$student->pincode',
registrationFees = '$student->registrationFees',
fatherName = '$student->fatherName',
fatherContactNo = '$student->fatherContactNo',
motherName = '$student->motherName',
motherContactNo = '$student->motherContactNo',
parentAddress = '$student->parentAddress',
parentLandmark = '$student->parentLandmark',
parentPlace = '$student->parentPlace',
parentDistrict = '$student->parentDistrict',
parentState = '$student->parentState',
parentPincode = '$student->parentPincode',
studentPhoto = '$student->studentPhoto',
studentAadhaarPhoto = '$student->studentAadhaarPhoto',
studentDobPhoto = '$student->studentDobPhoto',
studentOtherDocumentPhoto = '$student->studentOtherDocumentPhoto',
fatherPhoto = '$student->fatherPhoto',
fatherAadhaarPhoto = '$student->fatherAadhaarPhoto',
fatherOtherDocumentPhoto = '$student->fatherOtherDocumentPhoto',
motherPhoto = '$student->motherPhoto',
motherAadhaarPhoto = '$student->motherAadhaarPhoto',
motherOtherDocumentPhoto = '$student->motherOtherDocumentPhoto',
guardianPhoto = '$student->guardianPhoto',
guardianAadhaarPhoto = '$student->guardianAadhaarPhoto',
guardianOtherDocumentPhoto = '$student->guardianOtherDocumentPhoto'
WHERE registrationNo = $regno";

$sql2 = "UPDATE registeredStudents
SET  registrationNo = '$student->registrationNo',
category = '$student->category',
division = '$student->division',
name = '$student->name',
dob = '$student->dob',
gender = '$student->gender',
admissionDate = '$student->admissionDate',
admissionType = '$student->admissionType',
feeCategory = '$student->feeCategory',
busService = '$student->busService',
hostel = '$student->hostel',
contactNo = '$student->contactNo',
address = '$student->address',
landmark = '$student->landmark',
place = '$student->place',
district = '$student->district',
state = '$student->state',
pincode = '$student->pincode',
registrationFees = '$student->registrationFees',
fatherName = '$student->fatherName',
fatherContactNo = '$student->fatherContactNo',
motherName = '$student->motherName',
motherContactNo = '$student->motherContactNo',
parentAddress = '$student->parentAddress',
parentLandmark = '$student->parentLandmark',
parentPlace = '$student->parentPlace',
parentDistrict = '$student->parentDistrict',
parentState = '$student->parentState',
parentPincode = '$student->parentPincode'
WHERE registrationNo = $regno";

if($conn->query($sql) === true && $conn->query($sql2) === true){
    echo "1";
}
else{
    echo $conn->error;
}
    }
    $conn->close();
?>