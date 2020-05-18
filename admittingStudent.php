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
        $sql = "INSERT INTO admittedStudents VALUES ('$student->registrationNo',
        '$student->category',
        '$student->division',
        '$student->name',
        '$student->dob',
        '$student->gender',
        '$student->admissionDate',
        '$student->admissionType',
        '$student->feeCategory',
        '$student->busService',
        '$student->hostel',
        '$student->contactNo',
        '$student->address',
        '$student->landmark',
        '$student->place',
        '$student->district',
        '$student->state',
        '$student->pincode',
        '$student->registrationFees',
        '$student->fatherName',
        '$student->fatherContactNo',
        '$student->motherName',
        '$student->motherContactNo',
        '$student->parentAddress',
        '$student->parentLandmark',
        '$student->parentPlace',
        '$student->parentDistrict',
        '$student->parentState',
        '$student->parentPincode',
        '$student->studentPhoto',
        '$student->studentAadhaarPhoto',
        '$student->studentDobPhoto',
        '$student->studentOtherDocumentPhoto',
        '$student->fatherPhoto',
        '$student->fatherAadhaarPhoto',
        '$student->fatherOtherDocumentPhoto',
        '$student->motherPhoto',
        '$student->motherAadhaarPhoto',
        '$student->motherOtherDocumentPhoto',
        '$student->guardianPhoto',
        '$student->guardianAadhaarPhoto',
        '$student->guardianOtherDocumentPhoto'
        )";

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

        if($conn->query($sql) === true && $conn->query($sql2)){
            echo "1";
        }
        else{
            echo $conn->error;
        }
    }
    $conn->close();
?>