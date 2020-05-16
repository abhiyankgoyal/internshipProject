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
        $insertStudent = "INSERT INTO registeredstudents VALUES ('$student->registrationNo',
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
        '$student->parentPincode'
        )";

        if($conn->query($insertStudent) === true){
            echo "1";
        }
        else{
            echo $conn->error;
        }
    }
    $conn->close();
?>