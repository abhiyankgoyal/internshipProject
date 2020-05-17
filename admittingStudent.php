<?php
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

        if($conn->query($sql) === true){
            echo "1";
        }
        else{
            echo $conn->error;
        }
    }
    $conn->close();
?>